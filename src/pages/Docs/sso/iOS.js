import React from "react";
import { Link } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link as RRLink } from "react-router-dom";

export default function() {
    return (
        <>
            <h1>iOS快速接入</h1>
            <Alert severity="info">
                如果你还没创建应用，请先到控制台 -> 应用管理 新建一个得到应用id和应用secret再继续。
            </Alert>
            <Alert severity="info">
                如果你还没配置应用Bundle ID，请先到控制台 -> 应用管理 -> OAuth设置 配置好再继续。
            </Alert>
            <h2>集成SDK</h2>
            <p>推荐通过CocoaPods集成，在项目的Podfile添加：</p>
            <pre className="pre1">pod 'OnlyID'</pre>
            <p>集成SDK。</p>
            <p>
                你也可以使用源码集成方式，克隆{" "}
                <Link href="https://github.com/onlyid/onlyid-sdk-ios" target="_blank">
                    代码仓库
                </Link>{" "}
                到本地后，复制OnlyID文件夹添加到你的工程目录。
            </p>
            <Alert severity="info">
                如果使用源码集成方式，建议定期更新最新代码文件，以免错过新的产品功能和安全、错误方面的更新。
            </Alert>
            <h2>获取authorization code</h2>
            <p>
                展示登录按钮（如果你的应用把唯ID作为唯一登录方式，按钮文案可写 "登录"，否则可以写
                "用唯ID登录"）引导用户点击。
            </p>
            <p>使用OnlyID.oauth方法打开授权页。代码示例：</p>
            <pre>
                <code className="language-swift">
                    {`let config = OnlyIDOAuthConfig(clientId: "你的应用id")
OnlyID.oauth(config: config, fromController: self, delegate: self)
...
extension ViewController: OnlyIDOAuthDelegate {
    func onComplete(code: String, state: String?) { // 获得authorization code }

    func onError(error: NSError) { // 发生错误 }

    func onCancel() { // 用户取消 }
}`}
                </code>
            </pre>
            <Alert severity="info">
                使用Objective-C的开发者，请参考{" "}
                <Link
                    href="https://github.com/onlyid/onlyid-sdk-ios/tree/master/Example"
                    target="_blank"
                >
                    示例Demo（iOS）
                </Link>
                的OnlyID_Demo_Objc项目。
            </Alert>
            <Alert severity="info">
                如果用户安装了唯ID APP，会唤起APP完成授权，否则通过WebView打开授权页完成授权。
            </Alert>
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
                <Link
                    href="https://github.com/onlyid/onlyid-sdk-ios/tree/master/Example"
                    target="_blank"
                >
                    示例Demo（iOS）
                </Link>
                ，以加深理解。
            </p>
        </>
    );
}
