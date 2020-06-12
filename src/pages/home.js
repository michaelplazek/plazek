import React, { useContext, Fragment, useState } from "react";

import {
  ResponsiveContext,
  Heading,
  Box,
} from "grommet";

import { GRADIENT, INVERSE } from "../constants/colors";
import Fab from "../components/Fab";
import { isSmall } from "../utils";
import TerminalWrapper from "../components/TerminalWrapper";

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
          <Box>
            <Heading margin='none' size='xlarge'>
              UI / UX
            </Heading>
            {
              size !== 'small' && !hasTerminal && (
                <Fragment>
                  <Heading margin='none' size='xlarge'>
                    UI / UX
                  </Heading>
                  <Heading margin='none' size='xlarge'>
                    UI / UX
                  </Heading>
                </Fragment>
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
            height: '50vh',
            width: '100vw'
          }}
        >
          <TerminalWrapper setTerminal={setTerminal} />
        </Box>
      )}
    </Box>
  );
};

export default Home;
