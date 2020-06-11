import React from "react";
import { Box } from "grommet";

const PageContainer = ({ children, background }) => {

  return (
    <Box
      // fill={true}
      background={background}
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
