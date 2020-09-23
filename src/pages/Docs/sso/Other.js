import React from "react";
import { Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link as RRLink } from "react-router-dom";

export default function() {
    return (
        <>
            <h1>其他平台接入</h1>
            <h2>前言</h2>
            <p>
                唯ID官方暂只支持网站、Android和iOS三大常用平台，但其他平台（Windows、macOS等）通过嵌入WebView也能使用，本节简要介绍实现原理和流程。
            </p>
            <h2>实现原理</h2>
            <p>
                标准OAuth流程中，只有获取Authorization Code是在客户端进行，通过Authorization
                Code换取Access Token和通过Access Token换取用户信息，都是在服务端进行。
            </p>
            <p>
                所以这里关键是获取Authorization
                Code，简单说，是通过平台原生的WebView打开授权页，待用户认证授权后，重定向到应用回调URI时，拦截这个请求，并从中取出Authorization
                Code。
            </p>
            <h2>获取Authorization Code</h2>
            <p>用户需要登录时，通过平台原生WebView打开授权页：</p>
            <pre className="pre1">
                https://www.onlyid.net/oauth?
                <span className="color2">client-id=你的应用ID&redirect-uri=你的应用回调URI</span>
            </pre>
            <Alert severity="info">
                此时应用回调URI并无实际意义，建议设置成http://localhost，同时应使用{" "}
                <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"
                    target="_blank"
                >
                    encodeURIComponent
                </Link>{" "}
                方法转码后再使用。
            </Alert>
            <p>示例：</p>
            <pre className="pre1">
                https://www.onlyid.net/oauth?
                <span className="color2">
                    client-id=07c9770f22b1460398d44b4a3543db79&redirect-uri=http%3A%2F%2Flocalhost
                </span>
            </pre>
            <p>授权页引导用户完成验证，然后带上Code GET方式重定向到你的应用回调URI，成功示例：</p>
            <pre className="pre1">
                http://localhost/?
                <span className="color2">code=596c441eced7220159a3c0616e4de248e9223c9d</span>
            </pre>
            <p>此时通过WebView提供的相关拦截方法拦截请求，并从中取出Authorization Code。</p>
            <h2>获取Access Token和用户信息</h2>
            <p>
                之后的流程（通过Authorization Code换取Access Token和通过Access
                Token换取用户信息）与网站接入时并无区别，请直接参阅{" "}
                <Link component={RRLink} to="/docs/sso/web#access-token">
                    相关小节
                </Link>
                。
            </p>
        </>
    );
}
