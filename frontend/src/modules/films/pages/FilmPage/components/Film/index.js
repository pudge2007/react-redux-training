import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";

import Rating from "../../../../components/Raiting";
import Comments from "../../../../components/Comments";
import styles from "./styles";

class Film extends PureComponent {
  render() {
    const { classes, film } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.film}>
          <div className="row">
            <div className="col-3">
              <img src={film.imageURI} className={classes.poster} alt="" />
            </div>
            <div className="col-9">
              <div className={classes.titleWrapper}>
                <h1 className={classes.title}>{film.title}</h1>
                <Rating />
              </div>
              <p>{film.description}</p>
            </div>
          </div>
        </div>
        <Comments />
      </div>
    );
  }
}

export default withStyles(styles)(Film);
