import React from "react";
import Banner from "./Banner";
import styles from "./index.module.css";
import { Button } from "@material-ui/core";

export default function() {
    const goConsole = () => {
        window.location.assign("https://www.onlyid.net/console");
    };

    return (
        <>
            <Banner />
            <div className={styles.missionBox}>
                <p>我们的使命是建立全球统一的账号和认证体系，为世界带来秩序。</p>
                <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    color="primary"
                    onClick={goConsole}
                >
                    开始使用
                </Button>
                <hr className={styles.hr1} />
            </div>
        </>
    );
}
