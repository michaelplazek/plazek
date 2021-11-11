import React from "react";
import { Box } from "grommet";

import App from "../app/App";
import Header from "../components/Header";

export default Component => {
  const withAppHOC = props => {
    return (
      <App {...props}>
        <Header />
        <Component {...props} />
      </App>
    );
  };

  return withAppHOC;
};
