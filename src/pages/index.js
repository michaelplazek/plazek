import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import App from "../app/App";

const IndexPage = () => (
  <App>
    <SEO title="Home" />
      <h1>Hello Sweet World</h1>
  </App>
);

export default IndexPage;
