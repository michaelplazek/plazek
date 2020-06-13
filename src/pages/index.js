import React from "react";

import Home from "./home";
import { withApp } from "../HOCs";

const IndexPage = () => <Home />;

export default withApp(IndexPage);
