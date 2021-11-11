import React from "react";
import { Box } from "grommet";
import materialIcon from "../../images/material-ui-logo.png";

const MaterialUiIcon = () => {
  return (
    <Box style={{ width: "1em", height: "1em" }}>
      <img src={materialIcon} height={25} alt="MaterialUI logo" width={25} />
    </Box>
  );
};

export default MaterialUiIcon;
