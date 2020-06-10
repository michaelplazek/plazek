import React from "react";
import { Box } from "grommet";
import mountains from '../images/mountains.png';

const PageContainer = ({ children }) => {

  console.log(mountains);

  return (
    <Box
      fill={true}
      background={{ image: `url(${mountains})` }}
      pad={{ horizontal: 'medium' }}
    >
      <Box
        style={{ transform: 'translateY(100px)' }}
        margin={{ horizontal: 'medium', bottom: 'medium' }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageContainer;
