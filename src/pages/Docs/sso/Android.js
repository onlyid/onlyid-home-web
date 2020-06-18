import React from "react";
import { Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link as RRLink } from "react-router-dom";

export default function() {
    return (
        <>
            <h1>Android快速接入</h1>
            <Alert severity="info">
                如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用id和应用secret再继续。
            </Alert>
            <Alert severity="info">
                如果你还没配置应用包名，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
            </Alert>
            <h2>集成SDK</h2>
            <p>
                已改用gradle形式，发布到{" "}
                <Link href="https://jitpack.io/" target="_blank">
                    JitPack
                </Link>
                ，请开发者使用gradle来编译、更新SDK。在项目全局的build.gradle添加：
            </p>
            <pre>
                <code className="lang-java">
                    {`allprojects {
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}`}
                </code>
            </pre>
            <p>在app模块的build.gradle添加：</p>
            <pre>
                <code className="lang-java">
                    {`dependencies {
    ...
    implementation 'com.github.onlyid:onlyid-sdk-android:1.0.2'
}`}
                </code>
            </pre>
            <p>集成SDK。</p>
            <h2>获取authorization code</h2>
            <p>
                展示登录按钮（如果你的应用把唯ID作为唯一登录方式，按钮文案可写 "登录"，否则可以写
                "用唯ID登录"）引导用户点击，使用OnlyID.oauth方法发起请求打开授权页。代码示例：
            </p>
            <pre>
                <code className="language-java">
                    {`OnlyID.OAuthConfig config = new OnlyID.OAuthConfig("你的应用id");
OnlyID.oauth(this, config, new OnlyID.OAuthListener() {
    @Override
    public void onComplete(String code, String state) { // 获得authorization code }
    
    @Override
    public void onError(OnlyID.ErrCode errCode) { // 发生错误 }
    
    @Override
    public void onCancel() { // 用户取消 }
});`}
                </code>
            </pre>
            <h2>获取access token和用户信息</h2>
            <p>
                之后的流程（通过authorization code换取access token和通过access
                token换取用户信息）与网站接入时并无区别，请直接参阅{" "}
                <Link component={RRLink} to="/docs/sso/web#access-token">
                    相关小节
                </Link>
                。
            </p>
            <h2>结语</h2>
            <p>
                你已完成接入，接下来还可以到GitHub查阅{" "}
                <Link href="https://github.com/onlyid/onlyid-demo-android" target="_blank">
                    示例Demo（Android）
                </Link>
                ，以加深理解。
            </p>
        </>
    );
}
