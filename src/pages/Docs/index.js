import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import Background from "./Background";
import Otp from "./Otp";
import SsoOAuth from "./sso/OAuth";
import SsoWeb from "./sso/Web";
import SsoAndroid from "./sso/Android";
import SsoOther from "./sso/Other";
import SsoCustom from "./sso/Custom";
import IamIntro from "./iam/Intro";
import OtherSecurity from "./other/Security";
import OtherFaq from "./other/Faq";
import { Hidden } from "@material-ui/core";
import classNames from "classnames";
import Menu from "./Menu";

export default function() {
    const [menuContainerTop, setMenuContainerTop] = useState(0);
    const match = useRouteMatch();
    const location = useLocation();

    const showBanner = location.pathname === "/docs";

    useEffect(() => {
        const calcMenuContainerTop = () => {
            let top = 0;
            if (showBanner) top += 110;

            const offset = window.pageYOffset > 50 ? 50 : window.pageYOffset;
            top += 50 - offset;
            setMenuContainerTop(top);
        };

        calcMenuContainerTop();
        window.addEventListener("scroll", calcMenuContainerTop);
        return () => {
            window.removeEventListener("scroll", calcMenuContainerTop);
        };
    }, [showBanner]);

    useEffect(() => {
        window.Prism.highlightAll();
    }, [location.pathname]);

    return (
        <>
            {showBanner && (
                <p className={classNames("banner", styles.banner)}>半个小时，闪电接入</p>
            )}
            <div className={styles.root}>
                <Hidden xsDown>
                    <div
                        className={styles.menuContainer}
                        style={{
                            maxHeight: `calc(100% - ${menuContainerTop}px)`,
                            top: menuContainerTop
                        }}
                    >
                        <Menu />
                    </div>
                </Hidden>
                <div className={styles.right}>
                    <Switch>
                        <Route path={`${match.path}/background`}>
                            <Background />
                        </Route>
                        <Route path={`${match.path}/otp`}>
                            <Otp />
                        </Route>
                        <Route path={`${match.path}/sso/oauth`}>
                            <SsoOAuth />
                        </Route>
                        <Route path={`${match.path}/sso/web`}>
                            <SsoWeb />
                        </Route>
                        <Route path={`${match.path}/sso/android`}>
                            <SsoAndroid />
                        </Route>
                        <Route path={`${match.path}/sso/other`}>
                            <SsoOther />
                        </Route>
                        <Route path={`${match.path}/sso/custom`}>
                            <SsoCustom />
                        </Route>
                        <Route path={`${match.path}/iam/intro`}>
                            <IamIntro />
                        </Route>
                        <Route path={`${match.path}/other/security`}>
                            <OtherSecurity />
                        </Route>
                        <Route path={`${match.path}/other/faq`}>
                            <OtherFaq />
                        </Route>
                        <Route path={match.path}>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
}
