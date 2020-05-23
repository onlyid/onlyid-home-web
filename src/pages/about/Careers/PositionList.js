import React, { Fragment, useState } from "react";
import { Collapse, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import styles from "./index.module.css";
import { POSITION_IMG_ARR, POSITION_TYPES, POSITIONS } from "my/constants";

export default function({ current, setCurrent }) {
    const [value, setValue] = useState(0);

    const getNestList = index =>
        POSITIONS[index].map(p => (
            <ListItem button onClick={() => setCurrent(p)} key={p} selected={p === current}>
                <ListItemText primary={p} />
            </ListItem>
        ));

    return (
        <List className={styles.positionList} disablePadding>
            {POSITION_TYPES.map((type, index) => (
                <Fragment key={type}>
                    <ListItem button onClick={() => setValue(index)}>
                        <img src={POSITION_IMG_ARR[index]} alt="img" />
                        <ListItemText primary={type} />
                    </ListItem>
                    <Collapse in={index === value}>
                        <List disablePadding className={styles.nestedList}>
                            {getNestList(index)}
                        </List>
                    </Collapse>
                    {index !== POSITION_TYPES.length - 1 && <Divider />}
                </Fragment>
            ))}
        </List>
    );
}
