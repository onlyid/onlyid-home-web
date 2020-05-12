import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./index.module.css";
import { SentimentVerySatisfied, Star, StarHalf } from "@material-ui/icons";
import sso1 from "assets/sso1.png";

export default function() {
    return (
        <section className="section-bg">
            <div className="section">
                <p className="section-title">唯ID &nbsp; SSO</p>
                <div className="section-card">
                    <p className="p1">
                        唯ID
                        SSO（单点登录）让开发者不需关心用户注册、认证逻辑，轻松获取手机号、昵称等用户基本信息。
                    </p>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} sm={8}>
                            <ul className={styles.ul1}>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    标准OAuth协议，极简API，半小时闪电接入。
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    验证码复用唯ID OTP设置，同样无限手机短信验证码。
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    跨应用共享账号，在别处注册的用户直接登录你的应用。
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    丰富自定义选项，两种主题界面、两种显示大小按需选择。
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    不影响业务流程，不改变用户习惯，用户可不感知唯ID完成认证。
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    全程HTTPS加密，密码安全存储，银行风控专家为安全保驾护航。
                                </li>
                            </ul>
                            <p className={styles.compare}>对比唯ID OTP：</p>
                            <ul className={styles.ul1}>
                                <li>
                                    <StarHalf className={styles.star} />
                                    OTP：节省短信成本，简化发送验证码逻辑，但仍需自行实现注册认证逻辑。
                                </li>
                                <li>
                                    <Star className={styles.star} />
                                    <span>
                                        SSO：接入统一、专业、安全的认证中心，无需开发注册认证逻辑，
                                        <span className={styles.star}>彻底解放生产力。</span>
                                    </span>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <img
                                src={sso1}
                                alt="sso1"
                                className={styles.img1}
                                style={{ border: "1px solid #e8e8e8" }}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
}
