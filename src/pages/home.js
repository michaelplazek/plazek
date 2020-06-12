import React, { useContext, useState } from "react";
import posed from 'react-pose';

import {
  ResponsiveContext,
  Heading,
  Box,
} from "grommet";

import { GRADIENT, INVERSE } from "../constants/colors";
import Fab from "../components/Fab";
import { isSmall } from "../utils";
import TerminalWrapper from "../components/TerminalWrapper";

const AppearTransition = posed.div({
  visible: { opacity: 1, transition: { duration: 1000 } },
  hidden: { opacity: 0, transition: { duration: 1000 } },
});

const Home = () => {

  const size = useContext(ResponsiveContext);
  const [hasTerminal, setTerminal] = useState(false);

  return (
    <Box
      fill='vertical'
      style={size !== 'small' ? GRADIENT : undefined}
    >
      <Box
        fill='vertical'
        align='center'
        justify='center'
        style={INVERSE}
      >
        <Box
          align='center'
          style={hasTerminal ? { position: 'relative', bottom: '20vh' } : {}}
          direction={!isSmall(size) ? 'row' : 'column'}
          gap={!isSmall(size) ? 'large' : 'none'}
        >
          <Box animation='slideUp'>
            {
              size !== 'small' && (
                <AppearTransition pose={!hasTerminal ? 'visible' : 'hidden'}>
                  <Heading margin='none' size='xlarge'>
                    UI / UX
                  </Heading>
                </AppearTransition>
              )
            }
            <Heading margin='none' size='xlarge'>
              UI / UX
            </Heading>
            {
              size !== 'small' && (
                <AppearTransition pose={!hasTerminal ? 'visible' : 'hidden'}>
                  <Heading margin='none' size='xlarge'>
                    UI / UX
                  </Heading>
                </AppearTransition>
              )
            }
          </Box>
          <Box
            style={{
              position: 'relative',
              top: !isSmall(size) && !hasTerminal ? '1.55em' : 0
            }}
          >
            <Heading margin='none' level={2}>DEVELOPER</Heading>
          </Box>
        </Box>
      </Box>
      <Fab onClick={() => setTerminal(!hasTerminal)} />
      {hasTerminal && (
          <Box
            fill='horizontal'
            style={{
              position: 'absolute',
              bottom: '0px',
              width: '100vw',
            }}
          >
            <TerminalWrapper setTerminal={setTerminal} />
          </Box>
      )}
    </Box>
  );
};

export default Home;
