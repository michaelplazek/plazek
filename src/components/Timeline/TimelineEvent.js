import React from "react";
import uniqueId from 'lodash/uniqueId';

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Box, Heading, Text } from "grommet";

const TimelineEvent = ({
  type,
  date,
  title,
  subtitle,
  location,
  tags,
  icon
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#2194f3', color: '#fff', border: '0px' }}
      contentArrowStyle={{ borderRight: '7px solid #2194f3' }}
      date={<Text>{date}</Text>}
      iconStyle={{ background: '#2194f3', color: 'white' }}
      icon={React.createElement(icon)}
      animate={true}
    >
      <Box margin={{ bottom: 'medium' }}>
        <Heading margin='none' level={3}>
          {title}
        </Heading>
        <Heading margin='none' level={4}>
          {subtitle}
        </Heading>
        <Text>{location}</Text>
      </Box>
      <Box direction='row' wrap={true}>
        {tags.map(item => (
          <Box
            key={uniqueId()}
            background='white'
            round={true}
            pad={{ vertical: 'xsmall', horizontal: 'small' }}
            margin='xsmall'
            align='center'
            justify='center'
          >
            <Text size='small'>
              {item}
            </Text>
          </Box>
        ))}
      </Box>
    </VerticalTimelineElement>
  );
};

export default TimelineEvent;
