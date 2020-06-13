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

const fibonacci = (count, mem, visit) => {
  mem = mem || {};

  if (mem[count]) {
    visit(mem[count]);
    return mem[count];
  }
  if (count <= 1) {
    visit(count);
    return 1;
  }


  mem[count] = fibonacci(count - 1, mem, visit) + fibonacci(count - 2, mem, visit);
  visit(count);
  return mem[count];
};

const fibonacciCommand = (args, print) => {
  if (!args.count) {
    return print('Please enter a number to count to. Run \'help\' for more info.')
  }

  print(`Running fibonacci sequence ${args.count} times...`);
  return fibonacci(args.count, undefined, (count) => print(count))
};

const downloadCommand = (args, print) => {
  if (args.resume) {
    print('Downloading resume...');
    return download(resume, 'plazek_resume.png');
  } else {
    return print('Please provide a file. Run \'help\' for more info.');
  }
};

export const commands = setTerminal => ({
  download: {
    method: downloadCommand,
    options: [{
      name: 'resume',
      description: 'The current resume of Michael Plazek',
    }]
  },
  exit: {
    method: (_, print) => {
      print('Thank you for using the terminal. Have a nice day!');
      setTimeout(() => setTerminal(false), 500);
    },
    options: []
  },
  fibonacci: {
    method: fibonacciCommand,
    options: [{
      name: 'count',
      description: 'The number N that you want to print up to',
    }]
  },
});

export const descriptions = {
  download: 'download a static file from the build. Please use with one of the following flags: [--resume]',
  fibonacci: 'run the fibonacci sequence to N places. Please use with one of the following flags: [--count N ]',
  exit: 'exit the terminal experience'
};