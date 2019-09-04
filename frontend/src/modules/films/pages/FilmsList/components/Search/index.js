import React from "react";
import TextField from "@material-ui/core/TextField";

const Search = ({ value, onChange }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="m-0">Список фильмов</h2>
      <TextField
        className="w-25"
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
