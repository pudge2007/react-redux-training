import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core";

import TabPanel from "modules/common/TabPanel";
import ModalDialog from "modules/common/ModalDialog";
import { AUTH_MODAL } from "../../constants";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import styles from "./styles";

const AuthModal = ({ classes }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ModalDialog {...AUTH_MODAL}>
      <Tabs className={classes.tabs} value={value} onChange={handleChange}>
        <Tab label="Войти" />
        <Tab label="Регистрация" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignIn />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </ModalDialog>
  );
};

export default withStyles(styles)(AuthModal);
