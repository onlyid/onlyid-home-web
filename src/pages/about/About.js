import React from "react";
import classNames from "classnames";
import styles from "./About.module.css";
import { Grid, Link } from "@material-ui/core";
import { Link as RRLink } from "react-router-dom";
import about1 from "assets/about1.png";
import about2 from "assets/about2.png";
import about3 from "assets/about3.png";

export default function() {
    return (
        <>
            <p className={classNames("banner", styles.banner)}>专业的团队，做极致的产品</p>
            <section className="section-bg">
                <div className="section" style={{ paddingTop: "3rem" }}>
                    <p className="section-title">关于我们</p>
                    <p className="p3" style={{ fontSize: "1.1rem" }}>
                        唯ID隶属深圳市友全科技有限公司，是国内领先的IDaaS提供商，主要产品为企业IDaaS解决方案、账号和认证服务。我们打造了可扩展、易集成的平台以解决复杂的账号和认证问题，也率先利用OAuth协议解决手机号登录成本高问题。引领着账号和认证领域的革命与创新，深受广大开发者和企业客户的信赖。
                    </p>
                    <Grid container justify="space-around" spacing={4}>
                        <Grid item xs={12} sm={3} className={styles.imgBox}>
                            <img src={about1} alt="about1" style={{ width: "4.5rem" }} />
                            <p>创始人简介</p>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <div className={styles.card1}>
                                <p className={styles.title}>唯ID由 梁庭宾 于 2015年6月12日 创立</p>
                                <p>个人履历：</p>
                                <ul>
                                    <li>2012年毕业于中山大学软件工程专业</li>
                                    <li>前招商银行IT中心信用卡团队高级大数据风控工程师</li>
                                    <li>
                                        前平安集团智慧城市统一用户平台PAI（Ping An
                                        Identity）总负责人
                                    </li>
                                </ul>
                                <p>
                                    现任友全科技特别技术顾问、唯ID项目总负责人，推进唯ID建立全球统一的账号和认证体系。
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} className={styles.imgBox}>
                            <img src={about2} alt="about2" />
                            <p>专业的团队</p>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <div className={styles.card1}>
                                <p className={styles.title}>由高学历、高素质人才组成的专家团队</p>
                                <p>团队成员：</p>
                                <ul>
                                    <li>多毕业于国内知名985高校</li>
                                    <li>多来自国内优秀的科技企业</li>
                                    <li>平均年龄不到30岁，年轻有活力</li>
                                </ul>
                                <p>
                                    作为较早从事IDaaS行业的团队，我们积累了丰富的行业经验，为客户带来极高{" "}
                                    <Link component={RRLink} to="#economic-impact">
                                        经济收益
                                    </Link>
                                    。
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} className={styles.imgBox}>
                            <img src={about3} alt="about3" />
                            <p>品牌和文化</p>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <div className={styles.card1}>
                                <p className={styles.title}>The OnlyID for you</p>
                                <p>浪漫的词 only，寓意我们：</p>
                                <ul>
                                    <li>专注IDaaS行业并提供相关服务</li>
                                    <li>期盼未来使用一个账号畅游互联网</li>
                                    <li>相信科技有温度，唯ID可以相伴一生</li>
                                </ul>
                                <p>公司文化 —— 从原始的地方出发，天马行空，脚踏实地。</p>
                            </div>
                        </Grid>
                    </Grid>
                    <p className="p3" id="economic-impact" style={{ marginBottom: "0.5rem" }}>
                        经济收益：
                    </p>
                    <Grid container justify="space-around" style={{ padding: "0 1.5rem" }}>
                        <Grid item xs={12} sm={5} className={styles.economicItem}>
                            <p>使用唯ID前</p>
                            <ul className={styles.cons}>
                                <li>用户的账号和认证体验不一致。</li>
                                <li>无法简单实现两步验证、验证码发送。</li>
                                <li>网站和app不够安全。</li>
                                <li>用户转化率低。</li>
                                <li>开发、管理、安全、审计成本高。</li>
                                <li>产品推向市场时间慢。</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={5} className={styles.economicItem}>
                            <p>使用唯ID后</p>
                            <ul className={styles.pros}>
                                <li>集中的账号和认证管理平台带来一致的体验。</li>
                                <li>丰富的自定义选项，以及针对具体客户的源码级定制。</li>
                                <li>提升账号和认证管理的质量和安全性。</li>
                                <li>提高用户留存率、转化率。</li>
                                <li>降低开发、管理、安全、审计成本。</li>
                                <li>更快将你的产品推向市场。</li>
                                <li>开发者和用户更满意。</li>
                            </ul>
                        </Grid>
                    </Grid>
                    <p className="p3" style={{ fontSize: "1.1rem" }}>
                        无论你已经是我们的客户，或对产品感兴趣，或有其他方面的合作，我们都真诚期待你的来电（官网左下角有联系方式）。
                    </p>
                </div>
            </section>
        </>
    );
}
