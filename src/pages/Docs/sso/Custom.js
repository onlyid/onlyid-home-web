import React, { useEffect, useState } from "react";
import { Link, Tab, Tabs } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import styles from "../index.module.css";
import { CallMade } from "@material-ui/icons";

export default function() {
    const [tabs1, setTabs1] = useState(0);
    const [tabs2, setTabs2] = useState(0);

    let tabs1Content;
    switch (tabs1) {
        case 0:
            tabs1Content = (
                <pre className="pre1">
                    https://www.onlyid.net/oauth?
                    <span className="color2">client-id=...&redirect-uri=...&theme=dark</span>
                </pre>
            );
            break;
        case 1:
            tabs1Content = (
                <pre>
                    <code className="lang-java">
                        {`OnlyID.OAuthConfig config = new OnlyID.OAuthConfig("你的应用id"); 
config.theme = "dark"; 
OnlyID.oauth(this, config, new OnlyID.OAuthListener() ...`}
                    </code>
                </pre>
            );
            break;
        default:
            tabs1Content = (
                <pre>
                    <code className="lang-swift">
                        {`let config = OnlyIDOAuthConfig(clientId: clientId, theme: "dark")
OnlyID.oauth(config: config, fromController: self, delegate: self)`}
                    </code>
                </pre>
            );
    }

    let tabs2Content;
    switch (tabs2) {
        case 0:
            tabs2Content = (
                <pre className="pre1">
                    https://www.onlyid.net/oauth?
                    <span className="color2">client-id=...&redirect-uri=...&view=zoomed</span>
                </pre>
            );
            break;
        case 1:
            tabs2Content = (
                <pre>
                    <code className="lang-java">
                        {`OnlyID.OAuthConfig config = new OnlyID.OAuthConfig("你的应用id"); 
config.view = "zoomed"; 
OnlyID.oauth(this, config, new OnlyID.OAuthListener() ...`}
                    </code>
                </pre>
            );
            break;
        default:
            tabs2Content = (
                <pre>
                    <code className="lang-swift">
                        {`let config = OnlyIDOAuthConfig(clientId: clientId, view: "zoomed")
OnlyID.oauth(config: config, fromController: self, delegate: self)`}
                    </code>
                </pre>
            );
    }

    useEffect(() => {
        window.Prism.highlightAll();
    });

    return (
        <>
            <h1>自定义选项</h1>
            <Alert severity="info">如果你的应用还没接入SSO，请先参阅相关章节完成接入再继续。</Alert>
            <h2>前言</h2>
            <p>我们为开发者提供以下自定义选项（不断增加中）：</p>
            <table className={styles.table1}>
                <tr style={{ borderTop: "1px solid #E4E7ED" }}>
                    <td className={styles.c1}>主题样式</td>
                    <td>两种（日间、夜间）</td>
                </tr>
                <tr>
                    <td className={styles.c1}>显示界面</td>
                    <td>两种（标准、放大）</td>
                </tr>
            </table>
            <p>使用方式类似：对于网站，通过授权页的query参数设置；对于APP，通过SDK传参设置。</p>
            <h2>主题样式</h2>
            <p>
                提供日间、夜间两种主题样式，通过theme=dark设置展示夜间主题，否则默认日间主题，示例如下：
            </p>
            <Tabs value={tabs1} onChange={(_, value) => setTabs1(value)} indicatorColor="primary">
                <Tab label="网站" />
                <Tab label="Android" />
                <Tab label="iOS" />
            </Tabs>
            {tabs1Content}
            <p>
                访问控制台登录链接预览效果：
                <Link
                    href="https://www.onlyid.net/oauth?client-id=07c9770f22b1460398d44b4a3543db79&redirect-uri=https%3A%2F%2Fwww.onlyid.net%2Fconsole%2Foauth-callback"
                    target="_blank"
                    className={styles.link1}
                >
                    日间主题
                    <CallMade />
                </Link>{" "}
                <Link
                    href="https://www.onlyid.net/oauth?client-id=07c9770f22b1460398d44b4a3543db79&redirect-uri=https%3A%2F%2Fwww.onlyid.net%2Fconsole%2Foauth-callback&theme=dark"
                    target="_blank"
                    className={styles.link1}
                >
                    夜间主题
                    <CallMade />
                </Link>
                。
            </p>
            <h2>显示界面</h2>
            <p>
                提供标准、放大两种显示界面，通过view=zoomed设置放大显示，否则默认正常显示，示例如下：
            </p>
            <Tabs value={tabs2} onChange={(_, value) => setTabs2(value)} indicatorColor="primary">
                <Tab label="网站" />
                <Tab label="Android" />
                <Tab label="iOS" />
            </Tabs>
            {tabs2Content}
            <p>
                访问控制台登录链接预览效果：
                <Link
                    href="https://www.onlyid.net/oauth?client-id=07c9770f22b1460398d44b4a3543db79&redirect-uri=https%3A%2F%2Fwww.onlyid.net%2Fconsole%2Foauth-callback"
                    target="_blank"
                    className={styles.link1}
                >
                    正常显示
                    <CallMade />
                </Link>{" "}
                <Link
                    href="https://www.onlyid.net/oauth?client-id=07c9770f22b1460398d44b4a3543db79&redirect-uri=https%3A%2F%2Fwww.onlyid.net%2Fconsole%2Foauth-callback&view=zoomed"
                    target="_blank"
                    className={styles.link1}
                >
                    放大显示
                    <CallMade />
                </Link>
                。
            </p>
        </>
    );
}
