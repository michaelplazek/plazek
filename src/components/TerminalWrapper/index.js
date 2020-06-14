import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Terminal from 'terminal-in-react';

import get from 'lodash/get';

import { commands, descriptions } from './commands';

const TerminalWrapper = ({
  setTerminal
}) => {

  const siteData = useStaticQuery(graphql`
    query PathQuery {
      site {
        siteMetadata {
          links {
            label
            path
          }
        }
      }
    }
  `);

  const getLinks = () => get(siteData, 'site.siteMetadata.links');

  return (
    <Terminal
      watchConsoleLogging={true}
      color='white'
      backgroundColor='black'
      prompt='white'
      barColor='black'
      promptSymbol='$'
      hideTopBar={true}
      allowTabs={false}
      style={{ fontSize: "1em" }}
      commands={commands(setTerminal, getLinks)}
      descriptions={descriptions}
      msg="Welcome to the terminal. Type 'help' for list of commands."
    />
  );
};

export default TerminalWrapper;
