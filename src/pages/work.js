import React from "react";
import { withApp } from "../HOCs";

const Work = () => {
  return (
    <div style={{ transform: 'translateY(100px)' }} >
      Work
    </div>
  );
};

export default withApp(Work);
