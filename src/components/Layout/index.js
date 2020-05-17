import React, { PureComponent } from "react";
import Header from "./Header";
import HeaderM from "./HeaderM";
import { Button, Dialog, DialogTitle, Hidden, IconButton } from "@material-ui/core";
import Footer from "./Footer";
import styles from "./Header.module.css";
import { Close } from "@material-ui/icons";
import logoLight from "../../assets/logo-light.svg";

class Layout extends PureComponent {
    state = {
        dialog1Visible: false
    };

    toggleDialog = () => {
        this.setState(state => ({ dialog1Visible: !state.dialog1Visible }));
    };

    goConsole = () => {
        window.location.assign("https://www.onlyid.net/console");
    };

    render() {
        const { children } = this.props;
        const { dialog1Visible } = this.state;

        return (
            <>
                <Hidden smUp>
                    <HeaderM onOpenTrialDialog={this.toggleDialog} />
                </Hidden>
                <Hidden xsDown>
                    <Header onOpenTrialDialog={this.toggleDialog} />
                </Hidden>
                {children}
                <Footer />
                <Dialog onClose={this.toggleDialog} open={dialog1Visible}>
                    <DialogTitle>
                        在线体验
                        <IconButton className={styles.closeButton} onClick={this.toggleDialog}>
                            <Close />
                        </IconButton>
                    </DialogTitle>
                    <div className={styles.dialog1}>
                        <p className="p2">
                            <img src={logoLight} alt="logo" className={styles.logo1} />
                            控制台采用了唯ID的账号和认证解决方案，实现了开发者注册、登录、管理等功能（可以理解为，控制台是接入唯ID的一个普通应用，和你的应用使用唯ID的方式并无不同）。
                        </p>
                        <p className="p2">马上注册成为开发者，直观感受下一代账号和认证解决方案。</p>
                        <div className={styles.buttonBox}>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                onClick={this.goConsole}
                            >
                                开始使用
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </>
        );
    }
}

export default Layout;
