import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FontStyle } from "./fonts/font";
import { GlobalStyle } from "./globalStyles/globalStyles";
ReactDOM.render(
    <React.StrictMode>
        <App />
        <FontStyle />
        <GlobalStyle />
    </React.StrictMode>,
    document.getElementById("root")
);
