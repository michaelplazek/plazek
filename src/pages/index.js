import React from "react";

import Home from "./Home";
import { withApp } from "../HOCs";

const IndexPage = () => <Home />;

export default withApp(IndexPage);
