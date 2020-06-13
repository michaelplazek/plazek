import React, { useState } from "react";
import { Box, Heading, Text } from "grommet";

import uniqueId from 'lodash/uniqueId';

import {
  DiCode as Code,
  DiGithubBadge as Github,
} from "react-icons/di";

const WorkWidget = ({
  repo
}) => {

  const {
    name,
    url,
    updatedAt,
    createdAt,
    symbol,
    languages,
    site,
    icon,
  } = repo;

  const [hovered, setHovered] = useState(false);

  return (
    <Box
      round='small'
      background='white'
      elevation={hovered ? 'medium' : 'small'}
      border={{ color: 'black', size: 'small' }}
      pad={{ horizontal: 'medium', vertical: 'small' }}
      fill='vertical'
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
      onClick={() => window.open(site || url, '_blank')}
    >
      <Box
        direction='row'
        justify='between'
        align='center'
      >
        <Box>
          <Heading level={3} margin='none'>{name}</Heading>
        </Box>
        <Box>
          { React.createElement(icon, { color: '#333', size: '1.5em', key: uniqueId() }) }
        </Box>
      </Box>
      {/*<Box align='center' justify='center'>*/}
        {/*<Heading color='black' margin='none' level={2} size='xlarge'>{symbol}</Heading>*/}
        {/*<Text size='xsmall'>{name}</Text>*/}
        {/*<Box direction='row' gap='small' margin='small'>*/}
          {/*{*/}
            {/*languages.map(language =>*/}
              {/*language.icons ? language.icons.map(*/}
                {/*icon => React.createElement(icon, { color: '#333', key: uniqueId() })*/}
              {/*) : <Code key={uniqueId()} color='black'/>)*/}
          {/*}*/}
        {/*</Box>*/}
      {/*</Box>*/}
    </Box>
  );
};

export default WorkWidget;
