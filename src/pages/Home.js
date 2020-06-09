import React, { useContext } from "react";
import {
  ResponsiveContext,
  Heading,
  Box,
} from "grommet";

import { useStateContext } from "../app/context";
import { GRADIENT, INVERSE } from "../constants/colors";

const Home = () => {

  const [{ app }, dispatch] = useStateContext();
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
          direction='row'
          gap='large'
        >
          <Box>
          <Heading margin='none' size='xlarge'>
            UI / UX
          </Heading>
          <Heading margin='none' size='xlarge'>
            UI / UX
          </Heading>
          <Heading margin='none' size='xlarge'>
            UI / UX
          </Heading>
          </Box>
          <Box
            style={{
              position: 'relative',
              top: '1.55em'
            }}
          >
            <Heading level={2}>DEVELOPER</Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
