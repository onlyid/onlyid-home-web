import React from "react";
import { Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import authSequence from "assets/auth-sequence.png";
import styles from "../index.module.css";

export default function() {
    return (
        <>
            <h1>OAuth 2.0入门</h1>
            <Alert severity="info">
                如果你已经使用过类似的基于OAuth的登录认证方案（如微信、微博等），可跳过本节。
            </Alert>
            <h2>前言</h2>
            <p>
                <Link href="http://oauth.net/2" target="_blank">
                    OAuth 2.0
                </Link>{" "}
                是一个开放标准，允许第三方访问用户在某一网站上存储的私密资源，而无需将用户名和密码提供给第三方。唯ID的账号和认证解决方案基于OAuth
                2.0构建，可以让用户安全地在第三方应用验证身份信息。
            </p>
            <p>本节不论述OAuth 2.0的协议细节，只介绍开发者接入时涉及到的概念和流程。</p>
            <h2>授权流程</h2>
            <p>支持Authorization Code授权方式，适用于拥有Server端的应用授权。整体流程：</p>
            <ul>
                <li>
                    第三方发起验证请求，用户在授权页完成账号验证，唯ID带上Authorization
                    Code返回第三方应用；
                </li>
                <li>
                    使用Authorization Code、Client ID和Client Secret进行RESTful API调用，获取Access
                    Token；
                </li>
                <li>使用Access Token进行RESTful API调用，获取用户信息。</li>
            </ul>
            <p>授权时序图：</p>
            <div className={styles.imgBox}>
                <img src={authSequence} alt="authSequence" className={styles.img1} />
            </div>
            <h2>名词解释</h2>
            <dl>
                <dt>Client ID和Client Secret</dt>
                <dd>
                    也叫应用ID和应用Secret，分别相当于你的应用在唯ID的帐号和密码，是SDK连接服务器所必需的标识。
                </dd>
                <dt>Authorization Code</dt>
                <dd>
                    第三方使用Authorization Code获取Access
                    Token，Code的超时时间为5分钟，一个Code只能获取一次Access Token即失效。
                </dd>
                <dt>Access Token</dt>
                <dd>
                    第三方使用Access
                    Token获取用户信息，Token的超时时间为1小时，一个Token可多次获取用户信息。
                </dd>
            </dl>
        </>
    );
}
