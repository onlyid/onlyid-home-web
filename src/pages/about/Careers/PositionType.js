import React from "react";
import styles from "./index.module.css";

export default function({ children, title, count, ...restProps }) {
    return (
        <div className={styles.positionType} {...restProps}>
            <div className={styles.imgBox}>{children}</div>
            <p className={styles.title}>{title}</p>
            <p className={styles.count}>{count}个职位</p>
        </div>
    );
}
