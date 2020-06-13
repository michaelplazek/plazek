import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import events from './events';
import TimelineEvent from "./TimelineEvent";

const Timeline = () => {
  return (
    <VerticalTimeline layout='2-columns'>
      {events.map(item => (
        <TimelineEvent
          {...item}
        />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
