import React, { useContext } from "react";
import { Box, Heading, ResponsiveContext, Text } from "grommet";

const InfoTile = ({ title, description, image }) => {

  const size = useContext(ResponsiveContext);

  return (
    <Box>
      <Box
        direction={size === 'small' ? 'column' : 'row'}
        margin={{ vertical: 'small' }}
        align='center'
      >
        <Box>
          <Heading level={3}>{title}</Heading>
          <Text>{description}</Text>
        </Box>

        <Box  margin={{ right: 'xlarge', left: 'medium' }} justify='center' align='center'>
          {image && React.createElement(image)}
        </Box>

      </Box>
    </Box>
  );
};

export default InfoTile;
