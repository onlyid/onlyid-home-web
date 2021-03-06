import React from "react";
import { Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function() {
    return (
        <>
            <h1>网站快速接入</h1>
            <Alert severity="info">
                如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用ID和应用Secret再继续。
            </Alert>
            <Alert severity="info">
                如果你还没配置应用回调URI，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
            </Alert>
            <h2>获取Authorization Code</h2>
            <p>
                展示登录链接（如果你的应用把唯ID作为唯一登录方式，链接文案可写 "登录"，否则可以写
                "用唯ID登录"）引导用户点击打开授权页：
            </p>
            <pre>
                <code className="lang-html">
                    {
                        '<a href="https://www.onlyid.net/oauth?client-id=你的应用ID&redirect-uri=你的应用回调URI">登录</a>'
                    }
                </code>
            </pre>
            <Alert severity="info">
                应用回调URI应使用{" "}
                <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"
                    target="_blank"
                >
                    encodeURIComponent
                </Link>{" "}
                方法转码后再使用；你可使用{" "}
                <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Window/open"
                    target="_blank"
                >
                    window.open
                </Link>{" "}
                方法以小窗口形式打开授权页，以获得更好体验。
            </Alert>
            <p>示例：</p>
            <pre>
                <code className="lang-html">
                    {
                        '<a href="https://www.onlyid.net/oauth?client-id=07c9770f22b1460398d44b4a3543db79&redirect-uri=https%3A%2F%2Fwww.example.com%2Fmy-app%2Foauth-callback">登录</a>'
                    }
                </code>
            </pre>
            <p>授权页引导用户完成验证，然后带上Code GET方式重定向到你的应用回调URI，成功示例：</p>
            <pre className="pre1">
                https://www.example.com/my-app/oauth-callback?
                <span className="color2">code=596c441eced7220159a3c0616e4de248e9223c9d</span>
            </pre>
            <h2 id="access-token">获取Access Token</h2>
            <Alert severity="warning">
                获取Access Token应在服务端进行，以防泄露你的应用Secret。
            </Alert>
            <p>得到Authorization Code后，POST方式请求：</p>
            <pre className="pre1">
                <span className="color1">POST </span>
                https://www.onlyid.net/api/open/access-token
                <br />
                <span className="color2">Content-Type</span>: application/json
                {`
{
    "clientSecret": 你的应用Secret,
    "authorizationCode": 获取到的Code
}`}
            </pre>
            <p>获取Access Token，示例：</p>
            <pre className="pre1">
                <span className="color1">POST </span>
                https://www.onlyid.net/api/open/access-token
                <br />
                <span className="color2">Content-Type</span>: application/json
                {`
{
    "clientSecret": "8d08fbbd89a547df8bda56eba12fac2e",
    "authorizationCode": "596c441eced7220159a3c0616e4de248e9223c9d"
}`}
            </pre>
            <p>请求成功，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 200</span>
                {`
{
    "token": "27fb7b817a4244a2a51ad7948d4a2d4e",
    "userId": "96710e363b814ddf888fba57e1c4c5fe",
    "expireDate": "2021-06-30T12:45:59",
}`}
            </pre>
            <p>请求失败，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 400</span>
                {`
{
    "error": "应用Secret错误，请检查"
}`}
            </pre>
            <h2>获取用户信息</h2>
            <Alert severity="warning">
                获取用户信息也应在服务端进行，以防泄露你的Access Token。
            </Alert>
            <p>得到Access Token后，以GET方式请求：</p>
            <pre className="pre1">
                <span className="color1">GET </span>
                https://www.onlyid.net/api/open/user-info?accessToken=获取到的Access Token
            </pre>
            <p>获取用户信息，示例：</p>
            <pre className="pre1">
                <span className="color1">GET </span>
                https://www.onlyid.net/api/open/user-info?accessToken=27fb7b817a4244a2a51ad7948d4a2d4e
            </pre>
            <p>请求成功，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 200</span>
                {`
{
  "id": "96710e363b814ddf888fba57e1c4c5fe",
  "avatarUrl": "https://www.onlyid.net/static/user-avatars/2f7004135c254db2832a43b1527b8e11.png",
  "nickname": "王语嫣",
  "mobile": "18588000048",
  "email": null,
  "gender": null,
  "birthDate": "2001-04-21",
  "province": "广东省",
  "city": "广州市",
  "bio": null,
  "createDate": "2020-04-13T18:07:45",
  "extra": null
}`}
            </pre>
            <Alert severity="info">
                当需要唯一标识用户时，应使用id字段。用户id跨应用统一：同一个用户在你的应用和其他所有应用的id是一样的。
            </Alert>
            <p>请求失败，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 400</span>
                {`
{
    "error": "Access Token错误（或超过有效期）"
}`}
            </pre>
            <h2>结语</h2>
            <p>
                你已完成接入，接下来还可以到GitHub查阅{" "}
                <Link href="https://github.com/onlyid/onlyid-demo-web" target="_blank">
                    示例Demo（Web）
                </Link>
                ，以加深理解。
            </p>
        </>
    );
}
