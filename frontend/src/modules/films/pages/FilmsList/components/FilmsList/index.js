import React, { Fragment } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import FilmsListItem from "../FilmsListItem";

const FilmsList = ({ films, isPending }) => {
  return (
    <Fragment>
      <h1 style={{ margin: 20 }}>Список фильмов</h1>
      {isPending && <LinearProgress color="secondary" variant="query" />}
      <ul className="list-group">
        {films.map(film => (
          <FilmsListItem
            key={film.id}
            classes="list-group-item list-group-item-action"
            film={film}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default FilmsList;
