import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "pages/About";
import Index from "pages/Index";

function App() {
    return (
        <BrowserRouter basename="/home">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
