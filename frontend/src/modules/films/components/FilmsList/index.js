import React, { Fragment } from "react";

import FilmsListItem from "../FilmsListItem";

const FilmsList = ({ films }) => {
  return (
    <Fragment>
      <h1 style={{ margin: 20 }}>Список фильмов</h1>
      <ul className="list-group">
        {films.map(film => (
          <button
            key={film.id}
            type="button"
            className="list-group-item list-group-item-action"
          >
            <FilmsListItem film={film} />
          </button>
        ))}
      </ul>
    </Fragment>
  );
};

export default FilmsList;
