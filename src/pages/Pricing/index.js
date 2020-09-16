import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import { Check } from "@material-ui/icons";

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
                        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
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
                    <p className="p3">
                        如果唯ID现有功能满足不了贵公司的需求，欢迎联系我们，定制你的企业专属版本。
                    </p>
                    <Grid container spacing={6}>
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
                                        <span className={styles.span1}>普通开发者、所有企业</span>
                                    </li>
                                    <li>
                                        <span>开通方式</span>
                                        <span className={styles.span1}>默认开通</span>
                                    </li>
                                </ul>
                                <hr className={styles.hr1} />
                                <ul className={styles.ul1}>
                                    <li>
                                        <span>客服支持时间</span>
                                        <span className={styles.span1}>每天 9:00-19:00</span>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={styles.card}>
                                <p className="p1">企业定制、私有部署</p>
                                <hr className={styles.hr1} />
                                <ul className={styles.ul1}>
                                    <li>
                                        <span>基础年费（人民币）</span>
                                        <span className={styles.span1} style={{ color: "#f5222d" }}>
                                            2000元
                                        </span>
                                    </li>
                                    <li>
                                        <span>定制和其他费用</span>
                                        <span className={styles.span1}>以合同为准</span>
                                    </li>
                                    <li>
                                        <span>目标用户群</span>
                                        <span className={styles.span1}>
                                            需要功能定制或私有部署的企业
                                        </span>
                                    </li>
                                    <li>
                                        <span>开通方式</span>
                                        <span className={styles.span1}>请联系客户经理</span>
                                    </li>
                                </ul>
                                <hr className={styles.hr1} />
                                <ul className={styles.ul1}>
                                    <li>
                                        <span className={styles.span1}>
                                            专有客服 7 * 24 小时随时响应
                                        </span>
                                        <Check />
                                    </li>
                                    <li>
                                        <span className={styles.span1}>成本价功能定制开发</span>
                                        <Check />
                                    </li>
                                    <li>
                                        <span className={styles.span1}>替换成您的品牌标识</span>
                                        <Check />
                                    </li>
                                    <li>
                                        <span className={styles.span1}>交付全套项目源代码</span>
                                        <Check />
                                    </li>
                                    <li>
                                        <span className={styles.span1}>一年内三次免费版本升级</span>
                                        <Check />
                                    </li>
                                    <li>
                                        <span className={styles.span1}>
                                            所有数据存储在自己的服务器
                                        </span>
                                        <Check />
                                    </li>
                                    <li>
                                        <span className={styles.span1}>
                                            源码和功能培训讲解（以方便二次开发）
                                        </span>
                                        <Check />
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                    <p className="p3" style={{ fontSize: "1.1rem" }}>
                        不管你是普通开发者还是各类企业、政府机构或者教育组织，有任何疑问，欢迎联系客户经理为你服务（官网左下角）。
                    </p>
                </div>
            </section>
        </div>
    );
}
