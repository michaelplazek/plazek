import React, { useEffect } from "react";
import { Box } from "grommet";
import Seo from "./Seo";
import { needsFooterSupport } from "../utils/browser";

const PageContainer = ({ children, background, title }) => {

  let addFooter;
  useEffect(() => {
    addFooter = needsFooterSupport();
  });

  return (
    <Box
      background={background}
      pad={{ horizontal: 'medium' }}
    >
      <Seo title={title} />
      <Box
        style={{ transform: 'translateY(100px)' }}
        margin={{ horizontal: 'medium',  bottom: 'medium' }}
        overflow='hidden'
      >
        {children}
      </Box>
      {addFooter && <Box height='small' fill='horizontal' />}
    </Box>
  );
};

export default PageContainer;
