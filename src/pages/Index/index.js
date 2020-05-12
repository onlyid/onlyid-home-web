import React from "react";
import Banner from "./Banner";
import styles from "./index.module.css";
import { Button } from "@material-ui/core";
import Intro from "./Intro";
import Otp from "./Otp";
import Sso from "./Sso";

export default function() {
    const goConsole = () => {
        window.location.assign("https://www.onlyid.net/console");
    };

    return (
        <>
            <Banner />
            <Intro />
            <Otp />
            <Sso />
            <div className={styles.missionBox}>
                <p>
                    我们的使命是建立全球统一的账号和认证体系，为世界带来秩序。马上开始使用唯ID，让我们一起朝目标更近一步！
                </p>
                <Button variant="contained" size="large" color="primary" onClick={goConsole}>
                    开始使用
                </Button>
                <hr className={styles.hr1} />
            </div>
        </>
    );
}
