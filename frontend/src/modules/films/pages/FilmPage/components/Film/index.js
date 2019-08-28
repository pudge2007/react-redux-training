import React, { PureComponent } from "react";

import Rating from "../../../../components/Raiting";
import { styles } from "./styles";

class Film extends PureComponent {
  render() {
    const { film } = this.props;
    return (
      <div style={styles.wrapper}>
        <div style={styles.film}>
          <div className="row">
            <div className="col-3">
              <img src={film.imageURI} style={styles.poster} alt="" />
            </div>
            <div className="col-9">
              <div style={styles.titleWrapper}>
                <h1 style={styles.title}>{film.title}</h1>
                <Rating value={film.rating} />
              </div>
              <p>{film.description}</p>
            </div>
          </div>
        </div>
        <div className="comments">
          <h2 style={{ marginBottom: 20 }}>Комментарии (12)</h2>
        </div>
      </div>
    );
  }
}

export default Film;
