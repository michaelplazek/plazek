import { graphql, navigate, useStaticQuery } from "gatsby";
import resume from '../../images/plazek_resume.pdf';
import { getFlags } from "./utils";

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
  if (args[0] === 'resume') {
    print('Downloading resume...');
    return download(resume, 'plazek_resume.png');
  } else {
    return print('Please provide a file. Run \'help\' for more info.');
  }
};

const printPaths = (print, getLinks) => {
  const links = getLinks();
  links.forEach(({ path }) => print(path))
};

const goCommand = (args, print, getLinks) => {
  if (args.list) {
    return printPaths(print, getLinks);
  }
  if (args.length === 1) {
    return navigate(args[0]);
  } else {
    print('Please use a valid format. Run \'go --help\' for more info.')
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
      name: 'list',
      description: 'List all of the available paths',
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
  download: "download a static file from the build. Usage: download <file>",
  go: 'navigate to an internal path in this app. Usage: go <path>',
  exit: 'exit the terminal experience'
};