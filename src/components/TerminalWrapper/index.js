import React from "react";
import Terminal from 'terminal-in-react';

import { commands, descriptions } from './commands';

const TerminalWrapper = ({
  setTerminal
}) => {
  return (
    <Terminal
      color='white'
      backgroundColor='black'
      prompt='white'
      barColor='black'
      promptSymbol='$'
      hideTopBar={true}
      allowTabs={false}
      style={{ fontSize: "1em" }}
      commands={commands(setTerminal)}
      descriptions={descriptions}
      msg="Welcome to the terminal. Type 'help' for list of commands."
    />
  );
};

export default TerminalWrapper;
