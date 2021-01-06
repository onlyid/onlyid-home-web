import React, { PureComponent } from "react";
import styles from "./index.module.css";

export default class extends PureComponent {
    static defaultProps = {
        data: [],
        type: "request"
    };

    render() {
        const { data, type } = this.props;

        return (
            <table className={styles.root}>
                <thead>
                    <tr>
                        <td>{type === "request" ? "参数" : "字段"}</td>
                        <td>{type === "request" && "必填，"}类型</td>
                        <td>含义</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr>
                            <td className={styles.c1}>{item.name}</td>
                            <td className={styles.c1}>{item.type}</td>
                            <td>{item.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
