import React from "react";
import { Box } from "grommet";
import flowIcon from "../../images/flow-logo.png";

const FlowIcon = () => {
  return (
    <Box style={{ width: "1em", height: "1em" }}>
      <img src={flowIcon} height={25} alt="Flow logo" width={25} />
    </Box>
  );
};

export default FlowIcon;
