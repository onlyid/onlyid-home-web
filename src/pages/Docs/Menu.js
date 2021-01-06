import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import styles from "./index.module.css";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

function MyListItem({ to, children }) {
    const location = useLocation();

    return (
        <ListItem button component={Link} to={to} selected={location.pathname === to}>
            {children}
        </ListItem>
    );
}

export default function() {
    const [otpVisible, setOtpVisible] = useState(true);
    const [ssoVisible, setSsoVisible] = useState(true);
    const [iamVisible, setIamVisible] = useState(true);
    const [otherVisible, setOtherVisible] = useState(true);

    return (
        <List component="nav" className={styles.menu}>
            <MyListItem to="/docs">
                <ListItemText primary="文档首页" />
            </MyListItem>
            <MyListItem to="/docs/background">
                <ListItemText primary="项目背景和特点" />
            </MyListItem>
            <ListItem button onClick={() => setOtpVisible(!otpVisible)}>
                <ListItemText primary="使用唯ID OTP" />
                {otpVisible ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={otpVisible}>
                <List disablePadding className={styles.nestedList}>
                    <MyListItem to="/docs/otp/intro">
                        <ListItemText primary="简介" />
                    </MyListItem>
                    <MyListItem to="/docs/otp/integrate">
                        <ListItemText primary="使用" />
                    </MyListItem>
                </List>
            </Collapse>
            <ListItem button onClick={() => setSsoVisible(!ssoVisible)}>
                <ListItemText primary="接入唯ID SSO" />
                {ssoVisible ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={ssoVisible}>
                <List disablePadding className={styles.nestedList}>
                    <MyListItem to="/docs/sso/oauth">
                        <ListItemText primary="OAuth 2.0入门" />
                    </MyListItem>
                    <MyListItem to="/docs/sso/web">
                        <ListItemText primary="网站快速接入" />
                    </MyListItem>
                    <MyListItem to="/docs/sso/android">
                        <ListItemText primary="Android快速接入" />
                    </MyListItem>
                    <MyListItem to="/docs/sso/ios">
                        <ListItemText primary="iOS快速接入" />
                    </MyListItem>
                    <MyListItem to="/docs/sso/other">
                        <ListItemText primary="其他平台接入" />
                    </MyListItem>
                    <MyListItem to="/docs/sso/custom">
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
                    <MyListItem to="/docs/iam/intro">
                        <ListItemText primary="简介" />
                    </MyListItem>
                    {/*<MyListItem to="/docs/iam/user">*/}
                    {/*    <ListItemText primary="用户管理" />*/}
                    {/*</MyListItem>*/}
                    {/*<MyListItem to="/docs/iam/org">*/}
                    {/*    <ListItemText primary="组织机构管理" />*/}
                    {/*</MyListItem>*/}
                    {/*<MyListItem to="/docs/iam/res">*/}
                    {/*    <ListItemText primary="权限管理" />*/}
                    {/*</MyListItem>*/}
                    {/*<MyListItem to="/docs/iam/role">*/}
                    {/*    <ListItemText primary="角色管理" />*/}
                    {/*</MyListItem>*/}
                    {/*<MyListItem to="/docs/iam/statistics">*/}
                    {/*    <ListItemText primary="统计数据" />*/}
                    {/*</MyListItem>*/}
                    {/*<MyListItem to="/docs/iam/audit">*/}
                    {/*    <ListItemText primary="审计日志" />*/}
                    {/*</MyListItem>*/}
                </List>
            </Collapse>
            <ListItem button onClick={() => setOtherVisible(!otherVisible)}>
                <ListItemText primary="其他" />
                {otherVisible ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={otherVisible}>
                <List disablePadding className={styles.nestedList}>
                    <MyListItem to="/docs/other/security">
                        <ListItemText primary="安全性" />
                    </MyListItem>
                    <MyListItem to="/docs/other/faq">
                        <ListItemText primary="常见问题" />
                    </MyListItem>
                </List>
            </Collapse>
        </List>
    );
}
