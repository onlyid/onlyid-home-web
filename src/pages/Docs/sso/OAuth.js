import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import authSequence from "assets/auth-sequence.png";
import styles from "../index.module.css";

export default function() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                OAuth 2.0入门
            </Typography>
            <Alert severity="info">
                <Typography variant="subtitle1">
                    如果你已经使用过类似的基于OAuth的登录认证方案（如微信、微博等），可跳过本节。
                </Typography>
            </Alert>
            <Typography variant="body1" gutterBottom>
                <Link href="http://oauth.net/2" target="_blank">
                    OAuth 2.0
                </Link>
                &nbsp;是一个开放标准，允许第三方访问用户在某一网站上存储的私密资源，而无需将用户名和密码提供给第三方。唯ID的账号和认证解决方案基于OAuth
                2.0构建，可以让用户安全地在第三方应用验证身份信息。
            </Typography>
            <Typography variant="body1" gutterBottom>
                本节不论述OAuth 2.0的协议细节，只介绍开发者接入时涉及到的概念和流程。
            </Typography>
            <Typography variant="h5" gutterBottom>
                授权流程
            </Typography>
            <Typography variant="body1" gutterBottom>
                支持authorization code授权方式，适用于拥有server端的应用授权。整体流程：
            </Typography>
            <Typography variant="body1" gutterBottom component="ul">
                <li>
                    第三方发起验证请求，用户在授权页完成账号验证，唯ID带上authorization
                    code返回第三方应用；
                </li>
                <li>
                    使用authorization code、client id和client secret进行RESTful API调用，获取access
                    token；
                </li>
                <li>使用access token进行RESTful API调用，获取用户信息。</li>
            </Typography>
            <Typography variant="body1" gutterBottom>
                授权时序图：
            </Typography>
            <div className={styles.imgBox}>
                <img src={authSequence} alt="authSequence" className={styles.img1} />
            </div>
            <Typography variant="h5" gutterBottom>
                名词解释
            </Typography>
            <Typography variant="body1" gutterBottom component="dl">
                <dt>client id和client secret</dt>
                <dd>
                    也叫应用id和应用secret，分别相当于你的应用在唯ID的帐号和密码，是SDK连接服务器所必需的标识。
                </dd>
                <dt>authorization code</dt>
                <dd>
                    第三方使用authorization code获取access
                    token，code的超时时间为5分钟，一个code只能获取一次access token即失效。
                </dd>
                <dt>access token</dt>
                <dd>
                    第三方使用access
                    token获取用户信息，token的超时时间为1小时，一个token可多次获取用户信息。
                </dd>
            </Typography>
        </>
    );
}
