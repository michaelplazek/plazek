import React from "react";
import Terminal from 'terminal-in-react';
import { Box } from "grommet";

import { commands, descriptions } from './commands';

const TerminalWrapper = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: 'fixed',
        bottom: 0
      }}
    >
      <Terminal
        color='white'
        backgroundColor='black'
        prompt='white'
        barColor='black'
        promptSymbol='$'
        hideTopBar={true}
        style={{ fontSize: "1em" }}
        commands={commands}
        descriptions={descriptions}
        msg="Welcome to the terminal. Type 'help' for list of commands."
      />
    </Box>
  );
};

export default TerminalWrapper;
