import React, { PureComponent } from "react";
import styles from "./index.module.css";
import Header from "./Header";
import HeaderM from "./HeaderM";
import { Hidden } from "@material-ui/core";
import Footer from "./Footer";

class Layout extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div className={styles.layout}>
                <Hidden smUp>
                    <HeaderM />
                </Hidden>
                <Hidden xsDown>
                    <Header />
                </Hidden>
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        );
    }
}

export default Layout;
