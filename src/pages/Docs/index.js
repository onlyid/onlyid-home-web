import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Switch, Route, Link, useRouteMatch, useLocation } from "react-router-dom";
import Home from "./Home";
import Background from "./Background";
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import classNames from "classnames";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

function MyListItem({ to, children }) {
    const location = useLocation();

    return (
        <ListItem button component={Link} to={to} selected={location.pathname === to}>
            {children}
        </ListItem>
    );
}

function Menu() {
    const [ssoVisible, setSsoVisible] = useState(false);
    const [iamVisible, setIamVisible] = useState(false);
    const [otherVisible, setOtherVisible] = useState(false);
    const match = useRouteMatch();

    return (
        <List component="nav" className={styles.menu}>
            <MyListItem to={`${match.url}`}>
                <ListItemText primary="文档首页" />
            </MyListItem>
            <MyListItem to={`${match.url}/background`}>
                <ListItemText primary="项目背景和特点" />
            </MyListItem>
            <MyListItem to={`${match.url}/otp`}>
                <ListItemText primary="使用唯ID OTP" />
            </MyListItem>
            <ListItem button onClick={() => setSsoVisible(!ssoVisible)}>
                <ListItemText primary="接入唯ID SSO" />
                {ssoVisible ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={ssoVisible}>
                <List disablePadding className={styles.nestedList}>
                    <MyListItem to={`${match.url}/sso/oauth`}>
                        <ListItemText primary="OAuth 2.0入门" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/sso/web`}>
                        <ListItemText primary="网站快速接入" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/sso/android`}>
                        <ListItemText primary="Android快速接入" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/sso/ios`}>
                        <ListItemText primary="iOS快速接入" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/sso/other`}>
                        <ListItemText primary="其他平台接入" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/sso/custom`}>
                        <ListItemText primary="自定义选项" />
                    </MyListItem>
                </List>
            </Collapse>
            <ListItem button onClick={() => setIamVisible(!iamVisible)}>
                <ListItemText primary="使用唯ID IAM" />
                {iamVisible ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={iamVisible}>
                <List disablePadding className={styles.nestedList}>
                    <MyListItem to={`${match.url}/iam/user`}>
                        <ListItemText primary="用户管理" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/iam/org`}>
                        <ListItemText primary="组织机构管理" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/iam/res`}>
                        <ListItemText primary="权限管理" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/iam/role`}>
                        <ListItemText primary="角色管理" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/iam/statistics`}>
                        <ListItemText primary="统计数据" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/iam/audit`}>
                        <ListItemText primary="审计日志" />
                    </MyListItem>
                </List>
            </Collapse>
            <ListItem button onClick={() => setOtherVisible(!otherVisible)}>
                <ListItemText primary="其他" />
                {otherVisible ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={otherVisible}>
                <List disablePadding className={styles.nestedList}>
                    <MyListItem to={`${match.url}/other/security`}>
                        <ListItemText primary="安全性" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/other/faq`}>
                        <ListItemText primary="常见问题" />
                    </MyListItem>
                    <MyListItem to={`${match.url}/other/terminology`}>
                        <ListItemText primary="名词解释" />
                    </MyListItem>
                </List>
            </Collapse>
        </List>
    );
}

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

    return (
        <>
            {showBanner && (
                <p className={classNames("banner", styles.banner)}>半个小时，闪电接入</p>
            )}
            <div className={styles.root}>
                <div
                    className={styles.menuContainer}
                    style={{
                        maxHeight: `calc(100% - ${menuContainerTop}px)`,
                        top: menuContainerTop
                    }}
                >
                    <Menu />
                </div>
                <div className={styles.right}>
                    <Switch>
                        <Route path={`${match.path}/background`}>
                            <Background />
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
