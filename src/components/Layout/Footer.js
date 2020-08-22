import React, { PureComponent } from "react";
import { Grid, Popper, Paper, Hidden } from "@material-ui/core";
import styles from "./Footer.module.css";
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
                                    商务咨询专线：15521312099
                                    <Hidden smUp>（微信同号）</Hidden>
                                    <Hidden xsDown>
                                        <i
                                            className="iconfont"
                                            onMouseEnter={this.showWeChat}
                                            onMouseLeave={this.closeWeChat}
                                        >
                                            &#xe7e5;
                                        </i>
                                    </Hidden>
                                </li>
                                <li>
                                    技术支持电话：15521312099
                                    <Hidden smUp>（微信同号）</Hidden>
                                    <Hidden xsDown>
                                        <i
                                            className="iconfont"
                                            onMouseEnter={this.showWeChat}
                                            onMouseLeave={this.closeWeChat}
                                        >
                                            &#xe7e5;
                                        </i>
                                    </Hidden>
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
                                    <Link to="/pricing">套餐价格与部署方式</Link>
                                </li>
                                <li>
                                    <Link to="/docs/other/faq">常见问题 FAQ</Link>
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
                                    <Link to="/about">关于我们（团队介绍）</Link>
                                </li>
                                <li>
                                    <Link to="/about/careers">加入我们（工作机会）</Link>
                                </li>
                                <li>
                                    <Link to="/about/agreement">用户协议</Link>
                                </li>
                                <li>
                                    <Link to="/about/privacy">隐私权政策</Link>
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
                            rel="noopener noreferrer"
                        >
                            粤ICP备16120960号-3
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}
