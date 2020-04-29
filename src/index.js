import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";

const theme = createMuiTheme({ zhCN });

const content = (
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) hydrate(content, rootElement);
else render(content, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
