import React, { PureComponent, Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Scrollbars } from "react-custom-scrollbars";

import FilmsListItem from "../FilmsListItem";

class FilmsList extends PureComponent {
  handleScroll = ({ top }) => {
    const { films, total, isPending, onScroll } = this.props;

    if (isPending || films.length === total) return;

    if (top === 1) onScroll();
  };

  render() {
    const { films, isPending } = this.props;
    return (
      <Fragment>
        <Scrollbars
          onScrollFrame={this.handleScroll}
          autoHeight
          autoHeightMax={"calc(100vh - 280px)"}
        >
          {!!films.length ? (
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
          )}
        </Scrollbars>
        {isPending && (
          <div className="d-flex justify-content-center mt-4">
            <CircularProgress color="secondary" />
          </div>
        )}
      </Fragment>
    );
  }
}

export default FilmsList;
