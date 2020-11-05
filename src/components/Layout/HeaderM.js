import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import logoLight from "assets/logo-light.svg";
import {
    Button,
    Collapse,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import {
    AccountBox,
    Close,
    Dashboard,
    ExpandLess,
    ExpandMore,
    Link,
    Menu,
    Sms
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./HeaderM.module.css";
import DocsMenu from "pages/Docs/Menu";

export default function({ onOpenTrialDialog }) {
    const history = useHistory();
    const location = useLocation();

    const [state, setState] = useState({
        menuVisible: false,
        productMenuVisible: false,
        docsMenuVisible: false
    });

    const toggleMenu = () => {
        setState({ ...state, menuVisible: !state.menuVisible });
    };

    const toggleProductMenu = () => {
        setState({ ...state, productMenuVisible: !state.productMenuVisible });
    };

    const toggleDocsMenu = () => {
        setState({ ...state, docsMenuVisible: !state.docsMenuVisible });
    };

    const go = route => {
        history.push(route);
        setState({ ...state, menuVisible: false });
    };

    useEffect(() => {
        setState({ ...state, menuVisible: false });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const openTrialDialog = () => {
        onOpenTrialDialog();
        setState({ ...state, menuVisible: false });
    };

    return (
        <>
            <header className={styles.header} style={{ backgroundColor: "#001529" }}>
                <Logo
                    className={styles.logo}
                    onClick={() => history.push("/")}
                    style={{ fill: "#e8e8e8", verticalAlign: "middle" }}
                />
                <IconButton onClick={toggleMenu}>
                    <Menu className={styles.toggleMenu} style={{ color: "white" }} />
                </IconButton>
            </header>
            {state.menuVisible && (
                <div className={styles.menuBox}>
                    <div className={styles.header}>
                        <img
                            src={logoLight}
                            alt="logo"
                            className={styles.logo}
                            onClick={() => go("/")}
                        />
                        <IconButton onClick={toggleMenu}>
                            <Close className={styles.toggleMenu} />
                        </IconButton>
                    </div>
                    <List style={{ paddingTop: 0 }}>
                        <Divider />
                        <ListItem className={styles.menuItem} button onClick={toggleProductMenu}>
                            <ListItemIcon>
                                <Link />
                            </ListItemIcon>
                            <ListItemText primary="产品与服务" />
                            {state.productMenuVisible ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={state.productMenuVisible}>
                            <List disablePadding>
                                <ListItem
                                    button
                                    className={styles.productMenuItem}
                                    onClick={() => go("/#otp")}
                                >
                                    <ListItemIcon>
                                        <Sms />
                                    </ListItemIcon>
                                    <ListItemText>唯ID &nbsp; OTP</ListItemText>
                                </ListItem>
                                <ListItem
                                    button
                                    className={styles.productMenuItem}
                                    onClick={() => go("/#sso")}
                                >
                                    <ListItemIcon>
                                        <AccountBox />
                                    </ListItemIcon>
                                    <ListItemText>唯ID &nbsp; SSO</ListItemText>
                                </ListItem>
                                <ListItem
                                    button
                                    className={styles.productMenuItem}
                                    onClick={() => go("/#iam")}
                                >
                                    <ListItemIcon>
                                        <Dashboard />
                                    </ListItemIcon>
                                    <ListItemText>唯ID &nbsp; IAM</ListItemText>
                                </ListItem>
                            </List>
                        </Collapse>
                        <Divider />
                        <ListItem className={styles.menuItem} button onClick={toggleDocsMenu}>
                            <ListItemIcon>
                                <Link />
                            </ListItemIcon>
                            <ListItemText primary="开发文档" />
                            {state.docsMenuVisible ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={state.docsMenuVisible}>
                            <DocsMenu />
                        </Collapse>
                        <Divider />
                        <ListItem className={styles.menuItem} button onClick={openTrialDialog}>
                            <ListItemIcon>
                                <Link />
                            </ListItemIcon>
                            <ListItemText primary="在线体验" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            className={styles.menuItem}
                            button
                            onClick={() => history.push("/pricing")}
                        >
                            <ListItemIcon>
                                <Link />
                            </ListItemIcon>
                            <ListItemText primary="套餐价格" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            className={styles.menuItem}
                            button
                            onClick={() => window.location.assign("https://github.com/onlyid")}
                        >
                            <ListItemIcon>
                                <i className={classNames("iconfont", styles.githubIcon)}>
                                    &#xe6f6;
                                </i>
                            </ListItemIcon>
                            <ListItemText primary="GitHub仓库" />
                        </ListItem>
                    </List>
                    <div className={styles.consoleBox}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => window.location.assign("https://www.onlyid.net/console")}
                        >
                            登录控制台
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
