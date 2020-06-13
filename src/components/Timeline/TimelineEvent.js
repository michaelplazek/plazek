import React from "react";
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
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={<Text>{date}</Text>}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
