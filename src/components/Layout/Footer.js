import React, { PureComponent } from "react";
import { Grid, Popper, Paper } from "@material-ui/core";
import styles from "./index.module.css";
import weChat155 from "assets/wechat-155.jpeg";
import { Link } from "react-router-dom";

export default class extends PureComponent {
    state = {
        open: false,
        anchorEl: null
    };

    showWeChat = e => {
        this.setState({ anchorEl: e.currentTarget, open: true });
    };

    closeWeChat = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, anchorEl } = this.state;

        return (
            <footer className={styles.footerBg}>
                <Popper open={open} anchorEl={anchorEl} placement="right">
                    <Paper style={{ padding: 5 }}>
                        <img src={weChat155} height="215" alt="weChat" />
                    </Paper>
                </Popper>
                <div className={styles.footer}>
                    <Grid container>
                        <Grid item xs={12} sm={5}>
                            <p className={styles.title}>联系我们</p>
                            <ul>
                                <li>
                                    客户咨询专线：15521312099（微信同号）
                                    <i
                                        className="iconfont hide-xs"
                                        onMouseEnter={this.showWeChat}
                                        onMouseLeave={this.closeWeChat}
                                    >
                                        &#xe7e5;
                                    </i>
                                </li>
                                <li>
                                    技术支持电话：15521312099（微信同号）
                                    <i
                                        className="iconfont hide-xs"
                                        onMouseEnter={this.showWeChat}
                                        onMouseLeave={this.closeWeChat}
                                    >
                                        &#xe7e5;
                                    </i>
                                </li>
                                <li>技术支持QQ：452391310</li>
                                <li>开发者QQ群：23831587</li>
                                <li>
                                    技术支持邮箱：
                                    <a href="mailto:help@onlyid.net">help@onlyid.net</a>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <p className={styles.title}>开发者服务</p>
                            <ul>
                                <li>
                                    <Link to="/docs">开发接入文档</Link>
                                </li>
                                <li>
                                    <Link to="/prices">套餐价格和功能</Link>
                                </li>
                                <li>
                                    <Link to="/docs/faq">常见问题 FAQ</Link>
                                </li>
                                <li>
                                    <a href="https://github.com/onlyid">GitHub 仓库</a>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <p className={styles.title}>关于唯ID</p>
                            <ul>
                                <li>
                                    <Link to="/about">唯ID介绍（团队介绍）</Link>
                                </li>
                                <li>
                                    <Link to="/about#join">加入我们（工作机会）</Link>
                                </li>
                                <li>
                                    <Link to="/user-agreement">用户协议</Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">隐私权政策</Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <div className={styles.copyright}>
                        &copy; 2015 - {new Date().getFullYear()}
                        <span style={{ marginLeft: "1.5rem" }}>深圳市友全科技有限公司</span>
                        <span style={{ marginLeft: "1.5rem" }} className="hide-xs">
                            All rights reserved.
                        </span>
                        <a
                            style={{ marginLeft: "1.5rem" }}
                            href="http://beian.miit.gov.cn/"
                            target="_blank"
                            className="hide-xs"
                        >
                            粤ICP备16120960号-3
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}
