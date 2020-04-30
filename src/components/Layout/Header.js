import React from "react";
import styles from "./Header.module.css";
import logo from "assets/logo.svg";
import { NavLink, useHistory } from "react-router-dom";
import classNames from "classnames";
import { Button } from "@material-ui/core";

export default function() {
    const history = useHistory();

    return (
        <div className={styles.headerBg}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <img
                        src={logo}
                        alt="logo"
                        height="33"
                        className={styles.logo}
                        onClick={() => history.push("/")}
                    />
                    <ul className={styles.menu}>
                        <li>
                            <NavLink to="/docs">开发文档</NavLink>
                        </li>
                        <li>
                            <NavLink to="/trial">在线体验</NavLink>
                        </li>
                        <li>
                            <NavLink to="/downloads">下载中心</NavLink>
                        </li>
                        <li>
                            <NavLink to="/prices">套餐价格</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles.headerRight}>
                    <a href="https://github.com/onlyid" target="_blank">
                        <i className={classNames("iconfont", styles.githubIcon)}>&#xe6f6;</i>
                    </a>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 30 }}
                        onClick={() => window.location.assign("https://www.onlyid.net/console")}
                    >
                        登录控制台
                    </Button>
                </div>
            </div>
        </div>
    );
}
