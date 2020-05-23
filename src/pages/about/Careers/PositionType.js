import React from "react";
import styles from "./index.module.css";

export default function({ children, title, count }) {
    return (
        <div className={styles.positionType}>
            <div className={styles.imgBox}>{children}</div>
            <p className={styles.title}>{title}</p>
            <p className={styles.count}>{count}个职位</p>
        </div>
    );
}
