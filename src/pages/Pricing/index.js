import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export default function() {
    return (
        <div className={styles.root}>
            <p className="banner">不止便宜，更加专业</p>
            <section className="section-bg">
                <div className="section">
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
                        <p className="p2" style={{ textAlign: "right", marginTop: "1.5rem" }}>
                            —— 唯ID团队 2017年12月
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
