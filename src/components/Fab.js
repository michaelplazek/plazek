import React, { useContext, useState } from "react";
import { Box, ResponsiveContext } from "grommet";
import { Terminal } from "grommet-icons";

const rootStyle = size => ({
  position: "fixed",
  bottom: size !== "small" ? "3em" : "1.5em",
  right: size !== "small" ? "3em" : "1.5em",
  zIndex: 1000,
});

const fabStyle = (size, hovered) => ({
  ...rootStyle(size),
  borderRadius: "50%",
  border: "2px white solid",
  background: !hovered ? "white" : "black",
  height: size !== "small" ? "3em" : "2.5em",
  width: size !== "small" ? "3em" : "2.5em",
  cursor: "pointer",
});

const Fab = ({ onClick }) => {
  const size = useContext(ResponsiveContext);
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      style={fabStyle(size, hovered)}
      onClick={onClick}
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      align="center"
      justify="center"
    >
      <Terminal color={hovered ? "white" : "black"} />
    </Box>
  );
};

export default Fab;
