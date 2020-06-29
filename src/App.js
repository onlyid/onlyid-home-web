import React, { PureComponent, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Layout from "components/Layout";
import { CircularProgress } from "@material-ui/core";

const Index = React.lazy(() => import("pages/Index"));
const Docs = React.lazy(() => import("pages/Docs"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const About = React.lazy(() => import("pages/about/About"));
const Agreement = React.lazy(() => import("pages/about/Agreement"));
const Privacy = React.lazy(() => import("pages/about/Privacy"));
const Careers = React.lazy(() => import("pages/about/Careers"));

const loading = (
    <div style={{ padding: "35vh 0", textAlign: "center" }}>
        <CircularProgress />
    </div>
);

class App extends PureComponent {
    unlisten = null;

    componentDidMount() {
        this.setFontSize();
        window.addEventListener("resize", this.setFontSize);

        this.listenHistory();
    }

    componentWillUnmount() {
        this.unlisten();
    }

    listenHistory = () => {
        const { history } = this.props;

        this.unlisten = history.listen((location, action) => {
            // 如果是返回 则让浏览器自动处理
            if (action === "POP") return;

            const { hash } = location;
            if (hash) {
                setTimeout(() => {
                    const element = document.getElementById(hash.substr(1));
                    if (!element) return;

                    element.scrollIntoView();
                }, 100);
            } else {
                window.scrollTo(0, 0);
            }
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
                        <Route path="/about/agreement">
                            <Agreement />
                        </Route>
                        <Route path="/about/privacy">
                            <Privacy />
                        </Route>
                        <Route path="/about/careers">
                            <Careers />
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
