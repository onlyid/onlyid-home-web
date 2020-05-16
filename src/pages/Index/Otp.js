import React from "react";
import { Grid } from "@material-ui/core";
import { SentimentVerySatisfied } from "@material-ui/icons";
import otp1 from "assets/otp1.png";
import styles from "./index.module.css";

export default function() {
    return (
        <section className="section-bg" id="otp">
            <div className="section">
                <p className="section-title">唯ID &nbsp; OTP</p>
                <div className="section-card">
                    <p className="p1">
                        唯ID
                        OTP（一次性密码）让你不开通任何短信套餐，即可发送手机短信验证码（同时支持邮箱）。
                    </p>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <ul className={styles.ul1}>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    极简API，以RESTful接口形式提供，不需集成SDK，不影响业务流程
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    配置简单，灵活好用，你可以自定义验证码类型、长度、短信模板等
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    成本固定，只需年费200元，即可发送无限量手机短信或邮箱验证码
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={otp1} alt="otp1" className={styles.img1} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <pre className={styles.pre1}>
                                <span className="color1">POST </span>
                                https://www.onlyid.net/api/open/send-otp
                                <br />
                                <span className="color2">Content-Type</span>: application/json
                                {`
{
    "recipient":"13612345678",
    "clientId":"07c9770f22b1460398d44b4a3543db79",
    "clientSecret":"8d08fbbd89a547df8bda56eba12fac2e"
}`}
                            </pre>
                            <p className="img-tip">发送请求</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <pre className={styles.pre1}>
                                <span className="color1">HTTP/1.1 200</span>
                                {`
{
    "otp": "581305",
    "expireMin": 10,
    "maxFailCount": 10,
    "length": 6,
    "type": "NUMBER"
}`}
                            </pre>
                            <p className="img-tip">响应报文</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
}
