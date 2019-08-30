import React, { PureComponent } from "react";
import { compose } from "redux";
import { withStyles } from "@material-ui/core";

import Comment from "../Comment";
import styles from "./styles";

class CommentsList extends PureComponent {
  render() {
    const { classes, comments, children } = this.props;

    const count = comments.length;
    return (
      <div className={classes.wrapper}>
        <h3 className={classes.title} style={{ marginBottom: 20 }}>
          Комментарии {count ? `(${count})` : ""}
        </h3>

        {children}

        {!!count ? (
          comments.map(comment => (
            <Comment key={comment._id} comment={comment} />
          ))
        ) : (
          <h6 className="text-muted">Комментариев нет</h6>
        )}
      </div>
    );
  }
}

export default compose(withStyles(styles))(CommentsList);
