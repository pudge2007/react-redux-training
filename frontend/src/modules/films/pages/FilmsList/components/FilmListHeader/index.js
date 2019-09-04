import React from "react";

import Search from "../Search";
import Sort from "../Sort";

const FilmListHeader = ({ event }) => {
  return (
    <div className="row justify-content-between align-items-center mb-4">
      <div className="col-8 d-flex align-items-center">
        <h2 className="mb-1">Список фильмов</h2>
        <Sort onSort={event} />
      </div>
      <div className="col-4">
        <Search onSearch={event} />
      </div>
    </div>
  );
};

export default FilmListHeader;
