import React, { Fragment } from "react";
import { Collapse, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import styles from "./index.module.css";

export default function({
    positions,
    types,
    imgArr,
    currentType,
    setCurrentType,
    current,
    setCurrent
}) {
    const getNestList = index =>
        positions[index].map(p => (
            <ListItem button onClick={() => setCurrent(p)} key={p} selected={p === current}>
                <ListItemText primary={p} />
            </ListItem>
        ));

    return (
        <List className={styles.positionList} disablePadding>
            {types.map((type, index) => (
                <Fragment key={type}>
                    <ListItem button onClick={() => setCurrentType(index)}>
                        <img src={imgArr[index]} alt="img" />
                        <ListItemText primary={type} />
                    </ListItem>
                    <Collapse in={index === currentType}>
                        <List disablePadding className={styles.nestedList}>
                            {getNestList(index)}
                        </List>
                    </Collapse>
                    {index !== types.length - 1 && <Divider />}
                </Fragment>
            ))}
        </List>
    );
}
