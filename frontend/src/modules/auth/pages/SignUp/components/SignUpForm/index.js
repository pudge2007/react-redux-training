import React from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { withStyles } from "@material-ui/core/styles";

import TextInput from "modules/common/TextField";
import PendingButton from "modules/common/PendingButton";
import { email, required } from "utils/validators";
import styles from "./styles";

const SignUpForm = ({ classes, handleSubmit, valid, isPending }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={TextInput}
        label="Введите E-mail"
        margin="dense"
        variant="outlined"
        validate={[email, required]}
      />
      <Field
        name="password"
        component={TextInput}
        type="password"
        label="Введите пароль"
        margin="dense"
        variant="outlined"
        validate={[required]}
      />

      <div className={classes.buttonWrapper}>
        <PendingButton
          isPending={isPending}
          disabled={!valid || isPending}
          type="submit"
          className={classes.submitButton}
          color="primary"
          variant="contained"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </PendingButton>
      </div>
    </form>
  );
};

export default compose(
  reduxForm(),
  withStyles(styles)
)(SignUpForm);
