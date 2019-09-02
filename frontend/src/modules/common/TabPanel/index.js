import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

import styles from "./styles";

const TabPanel = props => {
  const { classes, children, value, index, ...other } = props;

  return (
    value === index && (
      <Typography
        component="div"
        role="tabpanel"
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <div className={classes.box}>{children}</div>
      </Typography>
    )
  );
};

export default withStyles(styles)(TabPanel);
