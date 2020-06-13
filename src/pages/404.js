import React from "react";

import Seo from "../components/seo";
import App from "../app/App";

const NotFoundPage = () => (
  <App>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </App>
);

export default NotFoundPage;
