import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import { Grid } from "@material-ui/core";

export default function() {
    return (
        <div className={styles.root}>
            <p className="banner">不止便宜，更加专业</p>
            <section className="section-bg">
                <div className="section" style={{ paddingTop: "3rem" }}>
                    <p className="section-title">价格调整公告</p>
                    <div className={classNames("section-card", styles.envelop)}>
                        <p className="p1">尊敬的开发者、企业客户：</p>
                        <p className="p2" style={{ marginTop: "1.5rem" }}>
                            为了提供更好的服务，我们将于2018年1月正式商业化。
                        </p>
                        <p className="p2">
                            以「One Product, One Edition, One
                            Plan」为理念，不再区分普通开发者和企业客户，统一成「唯ID OTP」、「唯ID
                            SSO」和「唯ID IAM」三个产品。统一对每个租户（统称开发者和企业）收取
                            <span style={{ color: "#f5222d" }}> 200元/年 </span>的费用
                            <span style={{ color: "#f5222d" }}>（首月免费）</span>。
                        </p>
                        <p className="p2">
                            这意味着，对于普通开发者，每年200元不仅可以发送无限量验证码短信，还可以享受本来只对企业客户开放的高级功能。
                            对于企业客户，只需花开发者版本的钱，就可以享受企业版的专业的IDaaS解决方案（媲美国内其他上万年费的产品）。
                        </p>
                        <p className="p2">
                            唯ID的使命是建立全球统一的账号和认证体系，为世界带来秩序，希望良心的定价可以早日促成这一目标。让我们一起努力
                            ❤️ 建立一个更加开放、自由、平等的互联网。
                        </p>
                        <p className="p2">有任何疑问，请联系客户经理（官网左下角）。</p>
                        <p
                            className="p2"
                            style={{ textAlign: "right", marginTop: "1.5rem", marginBottom: 0 }}
                        >
                            —— 唯ID团队 2017年12月
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-bg">
                <div className="section">
                    <p className="section-title">价格与部署</p>
                    <Grid container spacing={6} style={{ marginTop: "0.5rem" }}>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.card}>
                                <div className={styles.recommend}>
                                    <div className={styles.recommendBg} />
                                    <div className={styles.recommendText}>推荐</div>
                                </div>
                                <p className="p1">不定制、公有部署</p>
                                <hr className={styles.hr1} />
                                <ul className={styles.ul1}>
                                    <li>
                                        <span>基础年费（人民币）</span>
                                        <span className={styles.span1} style={{ color: "#f5222d" }}>
                                            200元
                                        </span>
                                    </li>
                                    <li>
                                        <span>其他费用</span>
                                        <span className={styles.span1}>无</span>
                                    </li>
                                    <li>
                                        <span>目标用户群</span>
                                        <span className={styles.span1}>普通开发者、中小企业</span>
                                    </li>
                                    <li>
                                        <span>客服支持时间</span>
                                        <span className={styles.span1}>每天 9:00-19:00</span>
                                    </li>
                                    <li>
                                        <span>开通方式</span>
                                        <span className={styles.span1}>默认开通</span>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.card}>
                                <p className="p1">企业定制、专有部署</p>
                                <hr className={styles.hr1} />
                                <ul className={styles.ul1}>
                                    <li>
                                        <span>基础年费（人民币）</span>
                                        <span className={styles.span1} style={{ color: "#f5222d" }}>
                                            2000元
                                        </span>
                                    </li>
                                    <li>
                                        <span>计算节点和数据库</span>
                                        <span className={styles.span1}>以合同为准</span>
                                    </li>
                                    <li>
                                        <span>定制费用</span>
                                        <span className={styles.span1}>以合同为准</span>
                                    </li>
                                    <li>
                                        <span>其他费用</span>
                                        <span className={styles.span1}>以合同为准</span>
                                    </li>
                                    <li>
                                        <span>目标用户群</span>
                                        <span className={styles.span1}>
                                            超过1000人的大企业或政府机构
                                        </span>
                                    </li>
                                    <li>
                                        <span>客服支持时间</span>
                                        <span className={styles.span1}>
                                            专有客服 7 * 24 小时随时响应
                                        </span>
                                    </li>
                                    <li>
                                        <span>开通方式</span>
                                        <span className={styles.span1}>请联系客户经理</span>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                    <p className="p1" style={{ marginTop: "2rem", padding: "0 1rem" }}>
                        不管你是普通开发者还是企业、政府机构或者教育组织，有任何疑问，欢迎联系客户经理为你服务（官网左下角）。
                    </p>
                </div>
            </section>
        </div>
    );
}
