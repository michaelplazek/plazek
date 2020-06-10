import React from "react";
import { Box } from "grommet";

const PageContainer = ({ children }) => {
  return (
    <Box style={{
      transform: 'translateY(100px)'
    }}
    margin={{ horizontal: 'medium' }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
