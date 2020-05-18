import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./index.module.css";
import classNames from "classnames";

export default function() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                唯ID 开发文档
            </Typography>
            <Typography variant="body1" gutterBottom>
                欢迎使用唯ID 统一、专业、安全的账号和认证解决方案。
            </Typography>
            <Typography variant="body1" gutterBottom>
                我们倡导渐进式开发，如果你刚刚接触唯ID，可以只使用唯ID
                OTP发送验证码，节省短信成本的同时也最容易使用。在对唯ID稍了解后，就可以接入唯ID
                SSO，这是唯ID的统一认证中心，最大的好处是，用户只需要一个账号就可以登录所有接入的应用。最后，当你的网站、APP规模逐渐起来，需要更进一步的用户管理、权限控制等功能时，就可以使用唯ID
                IAM，这是企业级的统一用户权限平台，可以满足你最复杂的IAM需求。
            </Typography>
            <Typography variant="body1" gutterBottom>
                从<i className={classNames("iconfont", styles.leftHand)}>&#xe78d;</i>
                左边目录挑选感兴趣章节，马上开始吧。
            </Typography>
        </>
    );
}
