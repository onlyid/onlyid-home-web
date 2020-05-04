import React, { PureComponent } from "react";
import Header from "./Header";
import HeaderM from "./HeaderM";
import { Hidden } from "@material-ui/core";
import Footer from "./Footer";

class Layout extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <>
                <Hidden smUp>
                    <HeaderM />
                </Hidden>
                <Hidden xsDown>
                    <Header />
                </Hidden>
                {children}
                <Footer />
            </>
        );
    }
}

export default Layout;
