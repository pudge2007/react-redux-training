import React, { Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { styles } from "./styles";

const Layout = ({ isPending, children }) => (
  <Fragment>
    {isPending ? (
      <div style={styles.wrapper}>
        <CircularProgress style={styles.loader} color="secondary" />
      </div>
    ) : (
      <div style={styles.content}>{children}</div>
    )}
  </Fragment>
);

export default Layout;
