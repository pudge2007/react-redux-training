import React from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";

import TextInput from "modules/common/TextField";
import PendingButton from "modules/common/PendingButton";

import { styles } from "./styles";

export const required = value => (value ? undefined : "Обязательное поле!");

const SignInForm = ({ handleSubmit, onCancel, valid, isPending }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="login"
        component={TextInput}
        label="Логин"
        margin="dense"
        variant="outlined"
        validate={[required]}
      />
      <Field
        name="password"
        component={TextInput}
        type="password"
        label="Пароль"
        margin="dense"
        variant="outlined"
        validate={[required]}
      />

      <div style={styles.buttonWrapper}>
        <Button
          disabled={isPending}
          type="button"
          onClick={onCancel}
          variant="outlined"
          color="secondary"
        >
          ЗАКРЫТЬ
        </Button>
        <PendingButton
          isPending={isPending}
          disabled={!valid || isPending}
          type="submit"
          style={styles.submitButton}
          color="primary"
          variant="contained"
        >
          ВОЙТИ
        </PendingButton>
      </div>
    </form>
  );
};

export default compose(reduxForm())(SignInForm);
