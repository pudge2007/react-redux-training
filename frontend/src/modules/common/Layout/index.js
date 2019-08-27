import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import { styles } from "./styles";

const Layout = ({ isPending, children }) => (
  <div style={styles.wrapper}>
    {isPending && (
      <LinearProgress style={styles.loader} color="secondary" variant="query" />
    )}
    {children}
  </div>
);

export default Layout;
