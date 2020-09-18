import React from "react";
import { Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function() {
    return (
        <>
            <h1>网站快速接入</h1>
            <Alert severity="info">
                如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用id和应用secret再继续。
            </Alert>
            <Alert severity="info">
                如果你还没配置应用回调uri，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
            </Alert>
            <h2>获取authorization code</h2>
            <p>
                展示登录链接（如果你的应用把唯ID作为唯一登录方式，链接文案可写 "登录"，否则可以写
                "用唯ID登录"）引导用户点击打开授权页：
            </p>
            <pre>
                <code className="lang-html">
                    {
                        '<a href="https://www.onlyid.net/oauth?client-id=你的应用id&redirect-uri=你的应用回调uri">登录</a>'
                    }
                </code>
            </pre>
            <Alert severity="info">
                redirect uri应使用{" "}
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
            <p>授权页引导用户完成验证，然后带上code GET方式重定向到你的redirect uri，成功示例：</p>
            <pre className="pre1">
                你的redirect uri?
                <span className="color2">code=596c441eced7220159a3c0616e4de248e9223c9d</span>
            </pre>
            <h2 id="access-token">获取access token</h2>
            <Alert severity="warning">
                获取access token应在服务端进行，以防泄露你的应用secret。
            </Alert>
            <p>得到authorization code后，POST方式请求：</p>
            <pre className="pre1">
                <span className="color1">POST </span>
                https://www.onlyid.net/api/oauth/access-token
                <br />
                <span className="color2">Content-Type</span>: application/json
                {`
{
    "clientSecret": 你的应用secret,
    "authorizationCode": 获取到的code
}`}
            </pre>
            <p>获取access token，示例：</p>
            <pre className="pre1">
                <span className="color1">POST </span>
                https://www.onlyid.net/api/oauth/access-token
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
    "accessToken": "27fb7b817a4244a2a51ad7948d4a2d4e",
    "expireMin": 60
}`}
            </pre>
            <p>请求失败，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 400</span>
                {`
{
    "error": "client secret错误，请检查"
}`}
            </pre>
            <h2>获取用户信息</h2>
            <Alert severity="warning">
                获取用户信息也应在服务端进行，以防泄露你的access token。
            </Alert>
            <p>得到access token后，以GET方式请求（注意Authorization请求头字段）：</p>
            <pre className="pre1">
                <span className="color1">GET </span>
                https://www.onlyid.net/api/open/user-info
                <br />
                <span className="color2">Content-Type</span>: application/json
                <br />
                <span className="color2">Authorization</span>: 获取到的access token
            </pre>
            <p>获取用户信息，示例：</p>
            <pre className="pre1">
                <span className="color1">GET </span>
                https://www.onlyid.net/api/open/user-info
                <br />
                <span className="color2">Content-Type</span>: application/json
                <br />
                <span className="color2">Authorization</span>: 27fb7b817a4244a2a51ad7948d4a2d4e
            </pre>
            <p>请求成功，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 200</span>
                {`
{
  "id": 69,
  "uid": "96710e363b814ddf888fba57e1c4c5fe",
  "avatarUrl": "https://www.onlyid.net/static/user-avatars/2f7004135c254db2832a43b1527b8e11.png",
  "nickname": "王语嫣",
  "mobile": "18588000048",
  "email": null,
  "gender": null,
  "createDate": "2020-04-13T18:07:45",
  "updatePasswordDate": null,
  "description": null,
  "creator": null
}`}
            </pre>
            <Alert severity="info">
                当需要唯一标识用户时，应使用uid字段。用户uid跨应用统一：同一个用户在你的应用和其他所有应用的uid是一样的。
            </Alert>
            <p>请求失败，响应报文示例：</p>
            <pre className="pre1">
                <span className="color1">HTTP/1.1 400</span>
                {`
{
    "error": "access token错误（或超过有效期）"
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
