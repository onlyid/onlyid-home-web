import React, { useState } from "react";
import logo from "assets/logo.svg";
import logoLight from "assets/logo-light.svg";
import {
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Button
} from "@material-ui/core";
import { Close, Menu, Link } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import styles from "./HeaderM.module.css";

export default function() {
    const history = useHistory();

    const [state, setState] = useState({
        menuVisible: false
    });

    const toggleMenu = () => {
        setState({ ...state, menuVisible: !state.menuVisible });
    };

    const go = route => {
        history.push(route);
        setState({ ...state, menuVisible: false });
    };

    return (
        <>
            <header className={styles.header} style={{ backgroundColor: "#001529" }}>
                <img
                    src={logo}
                    alt="logo"
                    className={styles.logo}
                    onClick={() => history.push("/")}
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
                        <ListItem className={styles.menuItem} button onClick={() => go("/docs")}>
                            <ListItemIcon>
                                <Link />
                            </ListItemIcon>
                            <ListItemText primary="开发文档" />
                        </ListItem>
                        <Divider />
                        <ListItem className={styles.menuItem} button onClick={() => go("/trial")}>
                            <ListItemIcon>
                                <Link />
                            </ListItemIcon>
                            <ListItemText primary="在线体验" />
                        </ListItem>
                        <Divider />
                        <ListItem
                            className={styles.menuItem}
                            button
                            onClick={() => go("/downloads")}
                        >
                            <ListItemIcon>
                                <Link />
                            </ListItemIcon>
                            <ListItemText primary="下载中心" />
                        </ListItem>
                        <Divider />
                        <ListItem className={styles.menuItem} button onClick={() => go("/pricing")}>
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
