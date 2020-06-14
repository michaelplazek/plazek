import React, { useContext } from "react";
import { Box, Heading, ResponsiveContext, Text } from "grommet";

const InfoTile = ({ title, description, image }) => {

  const size = useContext(ResponsiveContext);

  return (
    <Box>
      <Box
        direction={size === 'small' ? 'column' : 'row'}
      >
        <Box>
          <Heading level={3}>{title}</Heading>
          <Text>{description}</Text>
        </Box>

        <Box>
          <div />
        </Box>

      </Box>
    </Box>
  );
};

export default InfoTile;
