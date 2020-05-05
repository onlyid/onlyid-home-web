import React, { PureComponent } from "react";
import styles from "./Banner.module.css";
import classNames from "classnames";
import { Button, Grid } from "@material-ui/core";
import { MonetizationOn, Textsms } from "@material-ui/icons";
import Hammer from "hammerjs";

const TOTAL = 3;
const INTERVAL = 5000;

class Banner extends PureComponent {
    timer = null;

    state = {
        index: 0
    };

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.startTimer();

        const hammer = new Hammer(this.myRef.current);
        hammer.on("swipe", e => {
            const { index } = this.state;
            if (e.deltaX > 30 && index > 0) {
                this.scroll2(index - 1);
                this.cancelTimer();
                this.startTimer();
            } else if (e.deltaX < -30 && index < TOTAL - 1) {
                this.scroll2(index + 1);
                this.cancelTimer();
                this.startTimer();
            }
        });
    }

    cancelTimer = () => {
        window.clearInterval(this.timer);
    };

    startTimer = () => {
        this.timer = window.setInterval(() => {
            let { index } = this.state;
            index++;
            if (index >= TOTAL) index = 0;

            this.scroll2(index);
        }, INTERVAL);
    };

    scroll2 = index => {
        const { index: prevIndex } = this.state;
        if (index === prevIndex) return;

        this.myRef.current.style.transform = `translate(-${index}00%)`;
        this.setState({ index });
    };

    goConsole = () => {
        window.location.assign("https://www.onlyid.net/console");
    };

    render() {
        const { index } = this.state;

        const indicators = [];
        for (let i = 0; i < TOTAL; i++) {
            indicators.push(
                <div
                    className={classNames(styles.indicatorBox, { [styles.active]: index === i })}
                    onMouseEnter={this.cancelTimer}
                    onMouseLeave={this.startTimer}
                    onClick={() => this.scroll2(i)}
                    key={String(i)}
                >
                    <div className={styles.indicator} />
                </div>
            );
        }

        return (
            <div className={styles.root}>
                <div className={styles.banner} ref={this.myRef}>
                    <div className={classNames(styles.itemBox, styles.itemBox1)}>
                        <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            className={styles.item}
                        >
                            <Grid item xs={12} sm={8}>
                                <p className={styles.title}>唯ID 统一账号和认证解决方案</p>
                                <ul className={styles.detail}>
                                    <li>从不限量验证码短信到企业级用户权限平台</li>
                                    <li>我们为网站和APP提供通用的账号和认证解决方案</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    className={styles.button}
                                    color="primary"
                                    onClick={this.goConsole}
                                >
                                    开始使用
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classNames(styles.itemBox, styles.itemBox2)}>
                        <Grid container alignItems="center" className={styles.item} spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <p className={styles.title}>
                                    适合所有网站和APP的
                                    <br />
                                    完善的账号和认证解决方案
                                </p>
                                <Button
                                    variant="contained"
                                    size="large"
                                    className={styles.button}
                                    onClick={this.goConsole}
                                >
                                    开始使用
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ul className={styles.detail}>
                                    <li>
                                        <MonetizationOn className={styles.icon} />
                                        成本极低：每个开发者每年只需支付 200 元
                                    </li>
                                    <li>
                                        <Textsms className={styles.icon} />
                                        无限短信：提供不限量的手机号验证码短信
                                    </li>
                                    <li>
                                        <i className={classNames("iconfont", styles.githubIcon)}>
                                            &#xe6f6;
                                        </i>
                                        开放开源：开发路线图公开透明、不断改进
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classNames(styles.itemBox, styles.itemBox3)}>
                        <Grid container alignItems="center" className={styles.item} spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <p className={styles.title}>
                                    适合所有企业的
                                    <br />
                                    统一的用户和权限管理平台
                                </p>
                                <Button
                                    variant="contained"
                                    size="large"
                                    className={styles.button}
                                    onClick={this.goConsole}
                                >
                                    开始使用
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ul className={styles.detail}>
                                    <li>
                                        <MonetizationOn className={styles.icon} />
                                        安全可靠：我们始终把安全、稳定放在首位
                                    </li>
                                    <li>
                                        <Textsms className={styles.icon} />
                                        灵活好用：覆盖各行各业所有 IAM 需求
                                    </li>
                                    <li>
                                        <i className={classNames("iconfont", styles.githubIcon)}>
                                            &#xe6f6;
                                        </i>
                                        支持定制：大企业支持源码级定制和专有部署
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className={styles.indicators}>{indicators}</div>
            </div>
        );
    }
}

export default Banner;
