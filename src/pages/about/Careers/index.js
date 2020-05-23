import React, { useState } from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import PositionType from "./PositionType";
import Benefit from "./Benefit";
import benefit1 from "assets/benefit1.svg";
import benefit2 from "assets/benefit2.svg";
import benefit3 from "assets/benefit3.svg";
import benefit4 from "assets/benefit4.svg";
import benefit5 from "assets/benefit5.svg";
import PositionList from "./PositionList";
import PositionDetail from "./PositionDetail";
import jianpan from "assets/jianpan.png";
import kanban from "assets/kanban.png";
import yinhang from "assets/yinhang.png";
import zhaopian from "assets/zhaopian.png";
import { useHistory } from "react-router-dom";

export const POSITIONS = [
    ["Web工程师（React）", "Java工程师（Spring）", "Android工程师", "iOS工程师"],
    ["产品经理", "产品运营"],
    ["UI设计师"],
    ["销售经理", "电话销售", "客服专员"]
];
export const TYPES = ["工程", "产品", "设计", "营销&销售"];
export const IMG_ARR = [jianpan, yinhang, zhaopian, kanban];

export default function() {
    const [currentType, setCurrentType] = useState(0);
    const [current, setCurrent] = useState(POSITIONS[0][0]);
    const history = useHistory();

    let positionCount = 0;
    POSITIONS.forEach(ps => (positionCount += ps.length));

    const goType = index => {
        setCurrentType(index);
        history.push("#positions");
    };

    return (
        <>
            <p className={classNames("banner", styles.banner)}>加入我们，共创未来</p>
            <section className="section-bg">
                <div className="section" style={{ paddingTop: "3rem" }}>
                    <p className="section-title">工作机会</p>
                    <p className="p3">
                        我们永远在寻找聪明、创新的高素质人才，哪个角色让你游刃有余？
                    </p>
                    <Grid container style={{ marginTop: "1.5rem" }}>
                        {TYPES.map((type, index) => (
                            <Grid item xs={12} sm={3} key={type}>
                                <PositionType
                                    count={POSITIONS[index].length}
                                    title={type}
                                    onClick={() => goType(index)}
                                >
                                    <img src={IMG_ARR[index]} alt="img" />
                                </PositionType>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </section>
            <section className="section-bg">
                <div className="section">
                    <p className="section-title">待遇和福利</p>
                    <p className="p3">为优秀的人才提供应有的待遇。</p>
                    <Grid container style={{ marginTop: "1rem" }} spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Benefit
                                title="极具竞争力的总体薪酬"
                                detail="为每一位员工提供极具竞争力的薪酬待遇"
                            >
                                <img src={benefit1} alt="benefit1" />
                            </Benefit>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Benefit
                                title="平衡工作和生活"
                                detail="提供灵活和充裕的时间让人们休息和充电"
                            >
                                <img src={benefit2} alt="benefit2" />
                            </Benefit>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Benefit
                                title="职业发展"
                                detail="提供不间断的反馈和众多机会，让人们成长和发展"
                            >
                                <img src={benefit3} alt="benefit3" />
                            </Benefit>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Benefit
                                title="多样和包容"
                                detail="吸引多样性人才并提供包容的环境，让每个人都可以大展身手"
                            >
                                <img src={benefit4} alt="benefit4" />
                            </Benefit>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Benefit
                                title="顶级的办公设备"
                                detail="提供极好的办公设备，确保大家都表现出最好的自己"
                            >
                                <img src={benefit5} alt="benefit5" />
                            </Benefit>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className="section-bg" id="positions">
                <div className="section">
                    <p className="section-title">所有职位</p>
                    <div className="section-card">
                        <p className="p1">
                            当前有{positionCount}
                            个公开职位供你选择，所有职位特别优秀者可忽略学历、工作年限要求，请投递简历至：admin@onlyid.net。
                        </p>
                        <Grid container style={{ marginTop: "1.5rem" }}>
                            <Grid item xs={12} sm={3}>
                                <PositionList
                                    positions={POSITIONS}
                                    types={TYPES}
                                    imgArr={IMG_ARR}
                                    currentType={currentType}
                                    setCurrentType={setCurrentType}
                                    current={current}
                                    setCurrent={setCurrent}
                                />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <PositionDetail current={current} />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    );
}
