import React from "react";
import { withApp } from "../HOCs";

const Resume = () => {
  return (
    <div style={{ transform: 'translateY(100px)' }} >
      Resume
    </div>
  );
};

export default withApp(Resume);
