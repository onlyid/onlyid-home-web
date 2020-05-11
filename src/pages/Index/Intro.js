import React, { useState } from "react";
import styles from "./index.module.css";
import { Grid, Hidden, Tab, Tabs } from "@material-ui/core";
import { SentimentVeryDissatisfied, SentimentVerySatisfied } from "@material-ui/icons";
import intro1 from "assets/intro1.png";
import intro2 from "assets/intro2.png";
import intro3 from "assets/intro3.png";

export default function() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const developer = (
        <>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <p className="p1">在开发网站、APP过程中，你是否遇到这些问题？</p>
                    <ul className={styles.ul1}>
                        <li>
                            <SentimentVeryDissatisfied className={styles.dissatisfied} />
                            每开发一个应用，都需要重复开发用户注册和登录模块，费时费力
                        </li>
                        <li>
                            <SentimentVeryDissatisfied className={styles.dissatisfied} />
                            开发认证模块涉及复杂的安全知识，稍有不慎就容易出现安全漏洞
                        </li>
                        <li>
                            <SentimentVeryDissatisfied className={styles.dissatisfied} />
                            每个应用都需要用户单独注册账号，过程繁琐且密码众多难以记忆
                        </li>
                        <li>
                            <SentimentVeryDissatisfied className={styles.dissatisfied} />
                            支持手机号注册登录带来高昂短信成本，而且短信接口容易被盗刷
                        </li>
                    </ul>
                </Grid>
                <Hidden xsDown>
                    <Grid item sm={6}>
                        <img src={intro1} alt="introImg" className={styles.img1} />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6}>
                    <img src={intro2} alt="introImg" className={styles.img1} />
                    {/*<div className={styles.loginDemo}>*/}
                    {/*    <AccountCircle />*/}
                    {/*    <div className={styles.input}>abc@example.com</div>*/}
                    {/*    <div className={styles.input}>******</div>*/}
                    {/*    <div className={styles.button}>登录</div>*/}
                    {/*</div>*/}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p className="p1">是时候开始使用唯ID了！</p>
                    <ul className={styles.ul1}>
                        <li>
                            <SentimentVerySatisfied className={styles.satisfied} />
                            标准OAuth协议，半小时闪电接入，再也不用重复开发认证模块
                        </li>
                        <li>
                            <SentimentVerySatisfied className={styles.satisfied} />
                            彻底解耦认证和业务，把琐事交给唯ID，再也不用考虑怎么保存密码
                        </li>
                        <li>
                            <SentimentVerySatisfied className={styles.satisfied} />
                            跨应用统一账号，在别处注册的用户，不用注册直接登录你的应用
                        </li>
                        <li>
                            <SentimentVerySatisfied className={styles.satisfied} />
                            手机短信和邮箱验证码，统统免费，享受无限量的短信验证码服务
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </>
    );

    const enterprise = (
        <>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <p className="p1">在云和大数据时代，你的企业是否面临这些挑战：</p>
                    <ul className={styles.ul1}>
                        <li>
                            <SentimentVeryDissatisfied className={styles.dissatisfied} />
                            信息系统越来越多，但却都是独立的账号管理，形成一个个身份孤岛
                        </li>
                        <li>
                            <SentimentVeryDissatisfied className={styles.dissatisfied} />
                            不知道员工拥有哪些系统的哪些账号，以及对应的角色和权限是什么
                        </li>
                        <li>
                            <SentimentVeryDissatisfied className={styles.dissatisfied} />
                            组织机构变化、用户信息变化需要在不同系统多次录入、重复操作
                        </li>
                        <li>
                            <SentimentVeryDissatisfied className={styles.dissatisfied} />
                            多口令、弱口令、口令共享导致访问控制形同虚设、安全问题频出
                        </li>
                    </ul>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} sm={6}>
                        <img src={intro3} alt="introImg" className={styles.img1} />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6}>
                    <img src={intro2} alt="introImg" className={styles.img1} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p className="p1">是时候开始使用唯ID了！</p>
                    <ul className={styles.ul1}>
                        <li>
                            <SentimentVerySatisfied className={styles.satisfied} />
                            统一身份管理为每个自然人用户创建一个唯一的用户实体身份
                        </li>
                        <li>
                            <SentimentVerySatisfied className={styles.satisfied} />
                            跨应用统一账号，员工只需要一个账号即可登录企业内所有系统
                        </li>
                        <li>
                            <SentimentVerySatisfied className={styles.satisfied} />
                            统一组织机构管理、统一用户管理、按应用统一角色和权限管理
                        </li>
                        <li>
                            <SentimentVerySatisfied className={styles.satisfied} />
                            大数据风控持续分析识别风险，保证所有系统的安全性和正确性
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </>
    );

    return (
        <section className="section-bg">
            <div className="section" style={{ paddingTop: "3rem" }}>
                <p className="section-title">身份认证很复杂，唯ID来帮你</p>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    indicatorColor="primary"
                    style={{ marginTop: "1rem" }}
                >
                    <Tab label="致开发者" className={styles.tab} />
                    <Tab label="致企业客户" className={styles.tab} />
                </Tabs>
                <div className="section-card">{value === 0 ? developer : enterprise}</div>
            </div>
        </section>
    );
}
