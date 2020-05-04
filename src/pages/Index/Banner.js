import React, { PureComponent } from "react";
import styles from "./Banner.module.css";
import classNames from "classnames";
import { Button } from "@material-ui/core";
import { MonetizationOn, Textsms } from "@material-ui/icons";

const TOTAL = 3;
const INTERVAL = 5000;

class Banner extends PureComponent {
    timer = null;

    state = {
        index: 0
    };

    componentDidMount() {
        this.startTimer();
    }

    cancelTimer = () => {
        window.clearInterval(this.timer);
    };

    startTimer = () => {
        this.timer = setInterval(() => {
            let { index } = this.state;
            index++;
            if (index >= TOTAL) index = 0;

            this.scroll2(index);
        }, INTERVAL);
    };

    scroll2 = index => {
        document.querySelector("." + styles.banner).style.transform = `translate(-${index}00%)`;
        this.setState({ index });
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
                >
                    <div className={styles.indicator} />
                </div>
            );
        }

        return (
            <div className={styles.root}>
                <div className={styles.banner}>
                    <div className={classNames(styles.itemBox, styles.itemBox1)}>
                        <div className={styles.item}>
                            <div>
                                <p className={styles.title}>唯ID 统一账号和认证解决方案</p>
                                <ul className={styles.detail}>
                                    <li>从不限量验证码短信到企业级用户权限平台</li>
                                    <li>我们为网站和APP提供通用的账号和认证解决方案</li>
                                </ul>
                            </div>
                            <div className={styles.buttonBox}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    className={styles.button}
                                    color="primary"
                                >
                                    开始使用
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.itemBox, styles.itemBox2)}>
                        <div className={styles.item}>
                            <div>
                                <p className={styles.title}>
                                    适合所有网站和APP的
                                    <br />
                                    完善的账号和认证解决方案
                                </p>
                                <Button variant="contained" size="large" className={styles.button}>
                                    开始使用
                                </Button>
                            </div>
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
                        </div>
                    </div>
                    <div className={styles.item} style={{ backgroundColor: "blue" }}>
                        3
                    </div>
                </div>
                <div className={styles.indicators}>{indicators}</div>
            </div>
        );
    }
}

export default Banner;
