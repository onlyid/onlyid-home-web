import React from "react";
import { Typography, Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link as RRLink } from "react-router-dom";

export default function() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                其他平台接入
            </Typography>
            <Typography variant="h5" gutterBottom>
                前言
            </Typography>
            <Typography variant="body1" gutterBottom>
                唯ID官方暂只支持网站、Android和iOS三大常用平台，但其他平台（Windows、macOS等）通过嵌入WebView也能使用，本节简要介绍实现原理和流程。
            </Typography>
            <Typography variant="h5" gutterBottom>
                实现原理
            </Typography>
            <Typography variant="body1" gutterBottom>
                标准OAuth流程中，只有获取authorization code是在客户端进行，通过authorization
                code换取access token和通过access token换取用户信息，都是在服务端进行。
            </Typography>
            <Typography variant="body1" gutterBottom>
                所以这里关键是获取authorization
                code，简单说，是通过平台原生的WebView打开授权页，待用户认证授权后，重定向到redirect
                uri时，拦截这个请求，并从中取出authorization code。
            </Typography>
            <Typography variant="h5" gutterBottom>
                认证流程
            </Typography>
            <Typography variant="body1">用户需要登录时，通过平台原生WebView打开授权页：</Typography>
            <pre>
                https://www.onlyid.net/oauth?client-id=你的应用id&redirect-uri=你的应用回调uri
            </pre>
            <Alert severity="info">
                <Typography variant="body1">
                    此时redirect uri并无实际意义，建议设置成http://localhost，同时应使用{" "}
                    <Link
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"
                        target="_blank"
                    >
                        encodeURIComponent
                    </Link>{" "}
                    方法转码后再使用。
                </Typography>
            </Alert>
            <Typography variant="body1">示例：</Typography>
            <pre>
                https://www.onlyid.net/oauth?client-id=07c9770f22b1460398d44b4a3543db79&redirect-uri=http%3A%2F%2Flocalhost
            </pre>
            <Typography variant="body1">
                授权页引导用户完成验证，然后带上code GET方式重定向到你的redirect uri，成功示例：
            </Typography>
            <pre>你的redirect uri?code=596c441eced7220159a3c0616e4de248e9223c9d</pre>
            <Typography variant="body1" gutterBottom>
                此时通过WebView提供的相关拦截方法拦截请求，并从中取出authorization code。
            </Typography>
            <Typography variant="body1" gutterBottom>
                之后的流程（通过authorization code换取access token和通过access
                token换取用户信息）与网站接入时并无区别，请直接参阅{" "}
                <Link component={RRLink} to="/docs/sso/web#access-token">
                    相关小节
                </Link>
                。
            </Typography>
        </>
    );
}
