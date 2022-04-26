import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FontStyle } from "./fonts/font";
import { GlobalStyle } from "./globalStyles/globalStyles";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
        <FontStyle />
        <GlobalStyle />
    </React.StrictMode>,
    document.getElementById("root")
);
