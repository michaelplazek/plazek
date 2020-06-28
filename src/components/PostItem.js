import React, { useContext, useState } from "react";
import { navigate } from "gatsby";
import { Box, Heading, ResponsiveContext, Text } from "grommet";

const PostItem = ({ item }) => {

  const [hovered, setHovered] = useState(false);
  const size = useContext(ResponsiveContext);

  return (
    <Box
      pad='medium'
      background='light-1'
      round='small'
      elevation={hovered ? 'medium' : 'none'}
      key={item.title}
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
      onClick={() => navigate(item.slug)}
    >
      <Box
        fill='horizontal'
        direction={size !== 'small' ? 'row' : 'column'}
        justify='between'
        align={size !== 'small' ? 'center' : 'start'}
      >
        <Heading
          alignSlef='stretch'
          margin={size !== 'small' ? 'none' : { bottom: 'small' }}
          level={2}
          size='small'
        >
          {item.title}
        </Heading>
        <Text size='small'>{item.date}</Text>
      </Box>
    </Box>
  );
};

export default PostItem;
