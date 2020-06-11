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
  if (args.resume) {
    print('Downloading resume...');
    return download(resume, 'plazek_resume.png');
  } else {
    return print('Please provide a file. Run \'help\' for more info.');
  }
};

export const commands = {
  download: {
    method: downloadCommand,
    options: [{
      name: 'resume',
      description: 'The current resume of Michael Plazek',
    }]
  },
};

export const descriptions = {
  download: 'Download a static file from the build. Options include [--resume]'
};