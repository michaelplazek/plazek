import React from "react";
import { Box, Text } from "grommet";
import { INVERSE } from "../constants/colors";

const links = [
  'Work',
  'About',
  'Resume',
];

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
      align='center'
    >
      <Box
        margin={{ vertical: 'medium', horizontal: 'large' }}
      >
        Michael Plazek
      </Box>
      <Box
        margin={{ vertical: 'medium', horizontal: 'large' }}
        direction='row'
        gap='medium'
      >
        {
          links.map(item => <Text>{item}</Text>)
        }
      </Box>
    </Box>
  );
};

export default Header;
