import React from "react";
import { Box, Heading } from "grommet";

const WorkWidget = ({
  repo
}) => {

  const { name, url, updatedAt, createdAt, symbol } = repo;

  return (
    <Box
      round='small'
      background='black'
      elevation={1}
      fill='vertical'
    >
      <Box align='center' justify='center'>
        <Heading level={2} size='large'>{symbol}</Heading>
      </Box>
      <Box>
        <Heading level={3} size='small'>{name}</Heading>
      </Box>
    </Box>
  );
};

export default WorkWidget;
