import React, { useContext, useEffect, useState } from "react";
import { Box, ResponsiveContext } from "grommet";
import Seo from "./Seo";
import { needsFooterSupport } from "../utils/browser";

const PageContainer = ({ children, background, title }) => {
  const [addFooter, setAddFooter] = useState(false);
  const size = useContext(ResponsiveContext);
  useEffect(() => {
    setAddFooter(needsFooterSupport());
  }, [size]);

  return (
    <Box background={background} pad={{ horizontal: "medium" }}>
      <Seo title={title} />
      <Box
        style={{ transform: "translateY(100px)" }}
        margin={{ horizontal: "medium", bottom: "medium" }}
        overflow="hidden"
        align="center"
      >
        <Box width="1400px">{children}</Box>
      </Box>
      <div style={{ height: addFooter ? "240px" : "40px" }} />
    </Box>
  );
};

export default PageContainer;
