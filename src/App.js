import React, { PureComponent } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "components/Layout";
import Index from "pages/Index";
import Docs from "pages/Docs";
import Trial from "pages/Trial";
import Downloads from "pages/Downloads";
import Prices from "pages/Prices";
import About from "pages/About";

class App extends PureComponent {
    componentDidMount() {
        this.setFontSize();
        window.addEventListener("resize", this.setFontSize);
    }

    setFontSize = () => {
        const fontSize = window.innerWidth > 600 ? 16 : (window.innerWidth / 400) * 16;
        document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
    };

    render() {
        return (
            <BrowserRouter basename="/home">
                <Layout>
                    <Switch>
                        <Route path="/" exact>
                            <Index />
                        </Route>
                        <Route path="/docs">
                            <Docs />
                        </Route>
                        <Route path="/trial">
                            <Trial />
                        </Route>
                        <Route path="/downloads">
                            <Downloads />
                        </Route>
                        <Route path="/prices">
                            <Prices />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
