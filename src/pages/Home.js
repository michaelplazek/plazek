import React, { useContext } from "react";
import {
  ResponsiveContext,
  Heading,
  Box,
} from "grommet";

import { useStateContext } from "../app/context";
import { INVERSE } from "../constants/colors";

const Home = () => {

  const [{ app }, dispatch] = useStateContext();
  const size = useContext(ResponsiveContext);

  return (
    <Box
      fill='vertical'
      style={{ background: 'linear-gradient(90deg, #FFF 50%, #000 50%)' }}
    >
      <Box
        fill='vertical'
        align='center'
        justify='center'
        style={INVERSE}
      >
        <Box
          align='center'
        >
          <Heading margin='none' size='xlarge'>
            UI / UX
          </Heading>
          <Heading level={2}>DEVELOPER</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
