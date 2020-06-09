import React, { useContext, useState } from "react";
import { Box, ResponsiveContext } from "grommet";
import { Terminal } from "grommet-icons";

const rootStyle = (size) => ({
  position: 'fixed',
  bottom: size !== 'small' ? '3em' : '1.5em',
  right: size !== 'small' ? '3em' : '1.5em',
});

const fabStyle = (size, hovered) => ({
  ...rootStyle(size),
  borderRadius: '50%',
  border: '2px white solid',
  background: !hovered ? 'white' : 'black',
  height: size !== 'small' ? '3em' : '2.5em',
  width: size !== 'small' ? '3em' : '2.5em',
  cursor: 'pointer'
});

const Fab = ({
  hidden = false,
  onClick,
}) => {

  const size = useContext(ResponsiveContext);
  const [hovered, setHovered] = useState(false);

  return (
    !hidden ? (
      <Box
        style={fabStyle(size, hovered)}
        onClick={onClick}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        align='center'
        justify='center'
      >
        <Terminal color={hovered ? 'white' : 'black'} />
      </Box>
    ) : <div />
  )
};

export default Fab;
