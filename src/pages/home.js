import React, { useContext, Fragment } from "react";

import {
  ResponsiveContext,
  Heading,
  Box,
} from "grommet";

import { GRADIENT, INVERSE } from "../constants/colors";
import Fab from "../components/Fab";
import { isSmall } from "../utils";

const Home = () => {

  const size = useContext(ResponsiveContext);

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
          direction={!isSmall(size) ? 'row' : 'column'}
          gap={!isSmall(size) ? 'large' : 'none'}
        >
          <Box>
          <Heading margin='none' size='xlarge'>
            UI / UX
          </Heading>
          {
            size !== 'small' && (
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
              top: !isSmall(size) ? '1.55em' : 0
            }}
          >
            <Heading margin='none' level={2}>DEVELOPER</Heading>
          </Box>
        </Box>
      </Box>
      <Fab />
    </Box>
  );
};

export default Home;
