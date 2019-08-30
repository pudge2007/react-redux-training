import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Search = ({ classes, value, onChange }) => {
  return (
    <div className={classes.searchWrapper}>
      <h2 className={classes.title}>Список фильмов</h2>
      <TextField
        className={classes.search}
        label="Поиск фильма"
        value={value}
        onChange={onChange}
        margin="dense"
        variant="outlined"
      />
    </div>
  );
};

export default withStyles(styles)(Search);
