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
      {children}
    </Box>
  );
};

export default PageContainer;
