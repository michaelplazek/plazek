import React from "react";
import { Box } from "grommet";
import { INVERSE } from "../constants/colors";

const Header = () => {
  return (
    <Box
      style={{
        ...INVERSE,
        position: 'fixed'
      }}
      fill='horizontal'
      height='xsmall'
      justify='between'
      direction='row'
    >
      <Box>
        Logo
      </Box>
      <Box>
        Links
      </Box>
    </Box>
  );
};

export default Header;
