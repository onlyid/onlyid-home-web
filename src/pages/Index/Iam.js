import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import styles from "./index.module.css";
import iam1 from "assets/iam1.png";
import iam2 from "assets/iam2.png";
import { SentimentVerySatisfied } from "@material-ui/icons";
import classNames from "classnames";

export default function() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabPanels = [
        <div>
            <img src={iam1} alt="iam1" className={classNames("border1", styles.img1)} />
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
        </div>,
        <div>
            <img src={iam2} alt="iam2" className={classNames("border1", styles.img1)} />
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
        </div>,
        <div>
            <img src={iam2} alt="iam2" className={classNames("border1", styles.img1)} />
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
        </div>,
        <div>
            <img src={iam1} alt="iam3" className={classNames("border1", styles.img1)} />
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
        </div>
    ];

    return (
        <section className="section-bg">
            <div className="section">
                <p className="section-title">唯ID &nbsp; IAM</p>
                <div className="section-card">
                    <p className="p1">
                        以唯ID
                        SSO为基础，我们构建了一套适合所有网站、APP、企业使用的统一、专业、安全的IAM解决方案。
                    </p>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        indicatorColor="primary"
                        style={{ marginBottom: "1rem" }}
                    >
                        <Tab label="用户管理" className={styles.tab1} />
                        <Tab label="组织机构管理" className={styles.tab1} />
                        <Tab label="权限管理" className={styles.tab1} />
                        <Tab label="角色管理" className={styles.tab1} />
                    </Tabs>
                    {tabPanels[value]}
                </div>
            </div>
        </section>
    );
}
