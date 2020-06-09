import React from "react";
import App from "../app/App";
import Header from "../components/Header";

export default Component => {
  const withAppHOC = () => {
    return (
      <App>
        <Header />
        <Component />
      </App>
    );
  };

  return withAppHOC;
};
