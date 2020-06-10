import React, { useState } from "react";
import { Anchor, Box, Heading, Text } from "grommet";
import { navigate } from 'gatsby';
import { DiCode as Code, DiGithubBadge as Github } from "react-icons/di";

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
    website,
  } = repo;

  console.log(languages);

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
      onClick={() => window.open(website || url, '_blank')}
    >
      <Box align='center' justify='center'>
        <Heading color='black' margin='none' level={2} size='xlarge'>{symbol}</Heading>
        <Box direction='row' gap='small' margin='small'>
          {
            languages.map(language => language.icons ? language.icons.map(icon => React.createElement(icon, { color: '#333' })) : <Code color='black'/>)
          }
        </Box>
      </Box>
      {/*<Box margin={{ horizontal: 'small', top: 'small' }} align='center'>*/}
        {/*<Anchor icon={<Github />} href={url} size='small' label={name} />*/}
      {/*</Box>*/}
      {/*<Box>*/}

      {/*</Box>*/}
    </Box>
  );
};

export default WorkWidget;
