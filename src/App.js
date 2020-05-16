import React, { PureComponent } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Layout from "components/Layout";
import Index from "pages/Index";
import Docs from "pages/Docs";
import Trial from "pages/Trial";
import Pricing from "pages/Pricing";
import About from "pages/About";

class App extends PureComponent {
    componentDidMount() {
        this.setFontSize();
        window.addEventListener("resize", this.setFontSize);

        this.listenHistory();
    }

    listenHistory = () => {
        const { history } = this.props;

        history.listen(location => {
            const { hash } = location;
            if (!hash) return;

            setTimeout(() => {
                const element = document.getElementById(hash.substr(1));
                if (!element) return;

                element.scrollIntoView();
            }, 100);
        });
    };

    setFontSize = () => {
        const fontSize = window.innerWidth > 600 ? 16 : (window.innerWidth / 400) * 16;
        document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
    };

    render() {
        return (
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
                    <Route path="/pricing">
                        <Pricing />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Layout>
        );
    }
}

export default withRouter(App);
