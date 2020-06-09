import React from "react";
import App from "../app/App";

export default Component => {
  const withAppHOC = () => {
    return (
      <App>
        <Component />
      </App>
    );
  };

  return withAppHOC;
};
