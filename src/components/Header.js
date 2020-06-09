import React from "react";
import { Link } from "gatsby"
import { Box, Text } from "grommet";

import { INVERSE } from "../constants/colors";

const links = [
  {
    label: 'Work',
    path: '/work'
  },
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Resume',
    path: '/resume'
  },
];

const Header = () => {
  return (
    <Box
      style={{
        ...INVERSE,
        position: 'fixed',
        zIndex: 2
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
          links.map(item => <Link to={item.path}>{item.label}</Link>)
        }
      </Box>
    </Box>
  );
};

export default Header;
