import React, { PureComponent } from "react";

import FilmsListItem from "../FilmsListItem";

class FilmsList extends PureComponent {
  render() {
    const { films } = this.props;
    return !!films.length ? (
      <ul className="list-group">
        {films.map(film => (
          <FilmsListItem
            key={film.id}
            classes="list-group-item list-group-item-action"
            film={film}
          />
        ))}
      </ul>
    ) : (
      <h5 className="text-muted">Ничего не найдено</h5>
    );
  }
}

export default FilmsList;
