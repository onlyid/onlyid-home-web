import React from "react";
import styles from "./index.module.css";

export default function({ children, title, detail }) {
    return (
        <div className={styles.benefit}>
            <div className={styles.iconBox}>{children}</div>
            <div style={{ marginLeft: "4.5rem" }}>
                <p className={styles.title}>{title}</p>
                <p className={styles.detail}>{detail}</p>
            </div>
        </div>
    );
}
