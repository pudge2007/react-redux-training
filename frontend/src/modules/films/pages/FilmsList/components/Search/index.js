import React from "react";
import TextField from "@material-ui/core/TextField";

import { styles } from "./styles";

const Search = ({ value, onChange }) => {
  return (
    <div style={styles.searchWrapper}>
      <h2 style={styles.title}>Список фильмов</h2>
      <TextField
        style={styles.search}
        label="Поиск фильма"
        value={value}
        onChange={onChange}
        margin="dense"
        variant="outlined"
      />
    </div>
  );
};

export default Search;
