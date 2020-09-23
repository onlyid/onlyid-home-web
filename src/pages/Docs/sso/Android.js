import React from "react";
import { Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link as RRLink } from "react-router-dom";

export default function() {
    return (
        <>
            <h1>Android快速接入</h1>
            <Alert severity="info">
                如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用ID和应用Secret再继续。
            </Alert>
            <Alert severity="info">
                如果你还没配置应用包名，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
            </Alert>
            <h2>集成SDK</h2>
            <p>
                已改用Gradle形式，发布到{" "}
                <Link href="https://jitpack.io/#onlyid/onlyid-sdk-android" target="_blank">
                    <img
                        src="https://jitpack.io/v/onlyid/onlyid-sdk-android.svg"
                        alt="jitpack"
                        style={{ verticalAlign: "middle", height: "1.5rem" }}
                    />
                </Link>
                （绿色数字是当前最新版本）
                ，请开发者使用Gradle来编译、更新SDK。在项目全局的build.gradle添加：
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
    implementation 'com.github.onlyid:onlyid-sdk-android:最新版本'
}`}
                </code>
            </pre>
            <p>集成SDK。</p>
            <h2>获取Authorization Code</h2>
            <p>
                展示登录按钮（如果你的应用把唯ID作为唯一登录方式，按钮文案可写 "登录"，否则可以写
                "用唯ID登录"）引导用户点击。
            </p>
            <p>使用OnlyID.oauth方法打开授权页。代码示例：</p>
            <pre>
                <code className="language-java">
                    {`static final int REQUEST_OAUTH = 1;
...
OAuthConfig config = new OAuthConfig("你的应用ID");
OnlyID.oauth(this, config, REQUEST_OAUTH);
...
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    if (requestCode != REQUEST_OAUTH) return;

    if (resultCode == RESULT_OK) {
        // 获得Authorization Code
        String code = data.getStringExtra(OnlyID.EXTRA_CODE);
    } else if (resultCode == RESULT_CANCELED) {
        // 用户取消（拒绝）
    } else if (resultCode == OnlyID.RESULT_ERROR) {
        // 发生错误
        Exception exception = (Exception) data.getSerializableExtra(OnlyID.EXTRA_EXCEPTION);
    }
}`}
                </code>
            </pre>
            <Alert severity="info">
                如果用户安装了唯ID APP，会唤起APP完成授权，否则通过WebView打开授权页完成授权。
            </Alert>
            <h2>获取Access Token和用户信息</h2>
            <p>
                之后的流程（通过Authorization Code换取Access Token和通过Access
                Token换取用户信息）与网站接入时并无区别，请直接参阅{" "}
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
