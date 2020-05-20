import React, { PureComponent, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Layout from "components/Layout";
import { CircularProgress } from "@material-ui/core";

const Index = React.lazy(() => import("pages/Index"));
const Docs = React.lazy(() => import("pages/Docs"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const About = React.lazy(() => import("pages/About"));

const loading = (
    <div style={{ padding: "35vh 0", textAlign: "center" }}>
        <CircularProgress />
    </div>
);

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
                <Suspense fallback={loading}>
                    <Switch>
                        <Route path="/" exact>
                            <Index />
                        </Route>
                        <Route path="/docs">
                            <Docs />
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
                </Suspense>
            </Layout>
        );
    }
}

export default withRouter(App);
