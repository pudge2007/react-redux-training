import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import { formatDate } from "utils";
import styles from "./styles";

const Comment = ({ classes, comment }) => {
  return (
    <div className={classes.comment}>
      <Avatar
        src="https://bootdey.com/img/Content/user_1.jpg"
        className={classes.avatar}
      />
      <div className={classes.commentBody}>
        <span className={classes.name}>{comment.user.login}</span>
        <span className="text-muted">
          <small className="text-muted">{formatDate(comment.createdAt)}</small>
        </span>
        <p className={classes.text}>{comment.comment}</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(Comment);
