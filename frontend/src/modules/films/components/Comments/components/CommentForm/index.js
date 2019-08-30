import React from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import SendIcon from "@material-ui/icons/Send";
import { withStyles } from "@material-ui/core";

import TextInput from "modules/common/TextField";
import PendingButton from "modules/common/PendingButton";
import styles from "./styles";

const CommentForm = ({
  classes,
  handleSubmit,
  pristine,
  isAuthenticated,
  isPending
}) => {
  return (
    <div className={classes.wrapper}>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div className={classes.formWrapper}>
            <Field
              className={classes.field}
              name="comment"
              component={TextInput}
              multiline
              rowsMax="4"
              label="Введите текст комментария"
              margin="dense"
              variant="outlined"
            />
            <div className={classes.buttonWrapper}>
              <PendingButton
                isPending={isPending}
                disabled={pristine || isPending}
                type="submit"
                color="primary"
                variant="contained"
                size="large"
              >
              Отправить <SendIcon className={classes.sendIcon} />
              </PendingButton>
            </div>
          </div>
        </form>
      ) : (
        <h5 className="text-muted">
          Войдите в систему, чтобы оставлять комментарии
        </h5>
      )}
    </div>
  );
};

export default compose(
  reduxForm(),
  withStyles(styles)
)(CommentForm);
