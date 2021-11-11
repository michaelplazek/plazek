import React from "react";
import uniqueId from "lodash/uniqueId";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "./events";
import TimelineEvent from "./TimelineEvent";

const Timeline = () => {
  return (
    <VerticalTimeline layout="2-columns">
      {events.map(item => (
        <TimelineEvent {...item} key={uniqueId()} />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
