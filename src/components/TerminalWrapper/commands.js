import { graphql, navigate, useStaticQuery } from "gatsby";
import resume from '../../images/plazek_resume.pdf'

const download = (input, output) => {
  const element = document.createElement('a');
  element.setAttribute('href', input);
  element.setAttribute('download', output);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const downloadCommand = (args, print) => {
  console.log(args);
  if (args.resume) {
    return print('Downloading resume...');
    // return download(resume, 'plazek_resume.png');
  } else {
    return print('Please provide a file. Run \'help\' for more info.');
  }
};

const printPaths = (print, getLinks) => {
  const links = getLinks();
  links.forEach(({ path }) => print(path))
};

const go = path => navigate(path);

const goCommand = (args, print, getLinks) => {
  if (args.list) {
    print('The following paths are available as options.');
    return printPaths(print, getLinks);
  }

  return console.log(args);
};

export const commands = (setTerminal, getLinks) => ({
  download: {
    method: downloadCommand,
    options: [{
      name: 'resume',
      description: 'The current resume of Michael Plazek',
    }]
  },
  go: {
    method: (args, print) => goCommand(args, print, getLinks),
    options: [{
      name: 'path',
      description: 'The relative path you would like to visit',
    }]
  },
  exit: {
    method: (_, print) => {
      print('Thank you for using the terminal. Have a nice day!');
      setTimeout(() => setTerminal(false), 500);
    },
    options: []
  },
});

export const descriptions = {
  download: 'download a static file from the build. Please use with one of the following flags: [--resume]',
  go: 'navigate to an internal path in this app',
  exit: 'exit the terminal experience'
};