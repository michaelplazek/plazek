import React, { useState } from "react";
import { Box, Heading, Text } from "grommet";

import uniqueId from 'lodash/uniqueId';

import LanguageMeter from "./LanguageMeter";

const WorkWidget = ({
  repo
}) => {

  const {
    name,
    url,
    // updatedAt,
    // createdAt,
    // symbol,
    languages,
    site,
    icon,
    description
  } = repo;

  const [hovered, setHovered] = useState(false);

  return (
    <Box
      round='small'
      elevation={hovered ? 'medium' : 'none'}
      background='light-1'
      pad='medium'
      fill='vertical'
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
      onClick={() => window.open(site || url, '_blank')}
      justify='between'
    >
      <Box>
      <Box
        direction='row'
        justify='between'
        align='center'
      >
        <Box>
          <Heading level={3} margin='none'>{name}</Heading>
        </Box>
        <Box>
          { React.createElement(icon, { color: 'black', size: '1.5em', key: uniqueId() }) }
        </Box>
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Box>
          <Text>{description}</Text>
        </Box>
      </Box>
      </Box>
      <Box>
        <LanguageMeter languages={languages} />
      </Box>
    </Box>
  );
};

export default WorkWidget;
