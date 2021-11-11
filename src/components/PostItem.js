import React, { useContext, useState } from "react";
import { navigate } from "gatsby";
import { Box, Heading, ResponsiveContext, Text } from "grommet";

const PostItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const size = useContext(ResponsiveContext);

  return (
    <Box
      pad="medium"
      background="light-1"
      round="small"
      elevation={hovered ? "medium" : "none"}
      key={item.title}
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(item.slug)}
    >
      <Box
        fill="horizontal"
        direction={size !== "small" ? "row" : "column"}
        justify="between"
        align={size !== "small" ? "center" : "start"}
      >
        <Heading
          alignSlef="stretch"
          margin={size !== "small" ? "none" : { bottom: "small" }}
          level={2}
          size="small"
        >
          {item.title}
        </Heading>
        <Text size="small">{item.date}</Text>
      </Box>
      <Box margin={{ top: "small" }} direction="row" gap="small" wrap={true}>
        {item.tags.map(item => (
          <Box
            key={item}
            background="#2194f3"
            round={true}
            pad={{ vertical: "xsmall", horizontal: "small" }}
            margin={{ vertical: "xsmall" }}
            align="center"
            justify="center"
          >
            <Text size="small">{item}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PostItem;
