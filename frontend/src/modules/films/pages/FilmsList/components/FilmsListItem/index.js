import React from "react";
import { Link } from "react-router-dom";

import { styles } from "./styles";

const FilmsListItem = ({ film, classes }) => {
  return (
    <Link to={"/film/" + film.id} style={styles.link} className={classes}>
      <div className="row align-items-center">
        <div className="col-8">
          <p style={styles.title}>{film.title}</p>
          <p style={styles.subtitle}>{film.eng}</p>
        </div>
        <div className="col-2">
          <h6 style={styles.rating}>{film.rating ? film.rating : '-'}</h6>
        </div>
      </div>
    </Link>
  );
};

export default FilmsListItem;
