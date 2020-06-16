import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./index.module.css";
import iam1 from "assets/iam1.png";
import iam2 from "assets/iam2.png";
import iam3 from "assets/iam3.png";
import iam4 from "assets/iam4.png";
import { SentimentVerySatisfied } from "@material-ui/icons";
import classNames from "classnames";

export default function() {
    return (
        <section className="section-bg" id="iam">
            <div className="section">
                <p className="section-title">唯ID &nbsp; IAM</p>
                <div className="section-card">
                    <p className="p1">
                        以唯ID
                        SSO为基础，我们构建了一套适合所有网站、APP、企业使用的统一、专业、安全的
                        IDaaS 解决方案。
                    </p>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <p className={styles.iamTitle1}>用户管理</p>
                            <img
                                src={iam1}
                                alt="iam1"
                                className={classNames("border1", styles.img1)}
                            />
                            <ul className={classNames(styles.iamUl, styles.ul1)}>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    统一的用户池管理企业内外部所有用户
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    管理员可编辑昵称、头像、密码等用户信息
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p className={styles.iamTitle1}>组织机构管理</p>
                            <img
                                src={iam2}
                                alt="iam2"
                                className={classNames("border1", styles.img1)}
                            />
                            <ul className={classNames(styles.iamUl, styles.ul1)}>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    平安集团同款，专为政企客户打造
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    机构、岗位、用户组等常用功能一应俱全
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p className={styles.iamTitle1}>权限管理</p>
                            <img
                                src={iam3}
                                alt="iam3"
                                className={classNames("border1", styles.img1)}
                            />
                            <ul className={classNames(styles.iamUl, styles.ul1)}>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    权限抽象成对资源的操作，更符合用户直觉
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    资源树支持多层嵌套，不用担心表达能力不够
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p className={styles.iamTitle1}>角色管理</p>
                            <img
                                src={iam4}
                                alt="iam4"
                                className={classNames("border1", styles.img1)}
                            />
                            <ul className={classNames(styles.iamUl, styles.ul1)}>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    引入角色组对角色进行分类，好用更清晰
                                </li>
                                <li>
                                    <SentimentVerySatisfied className={styles.satisfied} />
                                    分配权限快速简单，查看权限一目了然
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <p className={styles.explore}>
                        更多好用功能（统计数据、审计日志）等你亲自探索。。。
                    </p>
                </div>
            </div>
        </section>
    );
}
