import React from "react";
import ReactDOM from "react-dom";
import { createLocalStorage } from "@satha/core";

import "./index.css";
import App from "./App";

createLocalStorage("exaple-satha-r-hooks", { defaultStorage: true });

ReactDOM.render(<App />, document.getElementById("root"));
