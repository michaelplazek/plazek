import React from "react";
import { withApp } from "../HOCs";

const About = () => {
  return (
    <div style={{ transform: 'translateY(100px)' }} >
      About me
    </div>
  );
};

export default withApp(About);
