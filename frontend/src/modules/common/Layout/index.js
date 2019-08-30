import React, { Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Layout = ({ classes, isPending, children }) => (
  <Fragment>
    {isPending ? (
      <div className={classes.wrapper}>
        <CircularProgress className={classes.loader} color="secondary" />
      </div>
    ) : (
      <div className={classes.content}>{children}</div>
    )}
  </Fragment>
);

export default withStyles(styles)(Layout);
