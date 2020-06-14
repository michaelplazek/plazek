import React from "react";
import { Box } from "grommet";
import Seo from "./Seo";

const PageContainer = ({ children, background, title }) => {

  return (
    <Box
      background={background}
      pad={{ horizontal: 'medium' }}
    >
      <Seo title={title} />
      <Box
        style={{ transform: 'translateY(100px)' }}
        margin={{ horizontal: 'medium', bottom: 'medium' }}
        overflow='hidden'
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageContainer;
