import React, { useContext } from "react";
import uniqueId from "lodash/uniqueId";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Box, Heading, Text, ResponsiveContext } from "grommet";

const TimelineEvent = ({
  type,
  date,
  title,
  subtitle,
  location,
  tags,
  icon,
  color,
}) => {
  const size = useContext(ResponsiveContext);
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#fff", color: "black", border: "0px" }}
      contentArrowStyle={{ borderRight: `7px solid #fff` }}
      date={<Text>{date}</Text>}
      iconStyle={{ background: "#fff", color: "black" }}
      icon={React.createElement(icon)}
      animate={true}
    >
      <Box margin="medium">
        <Box margin={{ bottom: "medium" }}>
          <Heading margin="none" level={3}>
            {title}
          </Heading>
          <Heading margin="none" level={4}>
            {subtitle}
          </Heading>
          <Text>{location}</Text>
        </Box>
        <Box direction="row" wrap={true}>
          {tags.map(item => (
            <Box
              key={uniqueId()}
              background="light-1"
              round={true}
              pad={{ vertical: "xsmall", horizontal: "small" }}
              margin="xsmall"
              align="center"
              justify="center"
            >
              <Text size="small">{item}</Text>
            </Box>
          ))}
        </Box>
      </Box>
      {size !== "small" && size !== "medium-small" && (
        <Box
          height="10px"
          background={color}
          round={{ corner: "bottom", size: "0.25em" }}
        />
      )}
    </VerticalTimelineElement>
  );
};

export default TimelineEvent;
