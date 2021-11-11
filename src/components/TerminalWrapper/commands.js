import { navigate } from "gatsby";

import resume from "../../images/plazek_resume.pdf";
import { getFlags, hasArgs, isEmpty, hasFlags, getArgs } from "./utils";

const download = (input, output) => {
  const element = document.createElement("a");
  element.setAttribute("href", input);
  element.setAttribute("download", output);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const downloadCommand = (args, print) => {
  print("Downloading resume...");
  return download(resume, "plazek_resume.png");
};

const printPaths = (print, getLinks) => {
  const links = getLinks();
  links.forEach(({ path }) => print(path));
};

const logInvalidCommand = (print, command) =>
  print(`Invalid command. Run '${command} --help' for more info.`);

const goCommand = (args, print, getLinks) => {
  console.log(args);
  if (isEmpty(args)) {
    return logInvalidCommand(print, "go");
  }
  if (hasFlags(args)) {
    if (hasArgs(args)) {
      return logInvalidCommand(print, "go");
    }

    const flags = getFlags(args);
    if (flags.includes("list")) {
      return printPaths(print, getLinks);
    } else {
      return logInvalidCommand(print, "go");
    }
  }

  if (hasArgs(args)) {
    const a = getArgs(args);
    if (a.length === 1) {
      return navigate(a[0]);
    } else {
      return logInvalidCommand(print, "go");
    }
  }

  return logInvalidCommand(print, "go");
};

export const commands = (setTerminal, getLinks) => ({
  resume: {
    method: downloadCommand,
    options: [],
  },
  // go: {
  //   method: (args, print) => goCommand(args, print, getLinks),
  //   options: [{
  //     name: 'list',
  //     description: 'list all of the available paths',
  //   }]
  // },
  exit: {
    method: (_, print) => {
      print("Thank you for using the terminal. Have a nice day!");
      setTimeout(() => setTerminal(false), 500);
    },
    options: [],
  },
});

export const descriptions = {
  resume: "download my resume from the build",
  // go: 'navigate to an internal path in this app. Usage: go <path>',
  exit: "exit the terminal experience",
};
