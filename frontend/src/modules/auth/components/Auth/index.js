import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";

import Logout from "modules/auth/components/LogoutMenu";
import AuthModal from "../AuthModal";

const Auth = ({ user, isAuthenticated, logout, toggleModal }) => {
  return isAuthenticated ? (
    <Logout user={user} onLogout={logout} />
  ) : (
    <Fragment>
      <Button variant="contained" color="secondary" onClick={toggleModal}>
        Войти
      </Button>
      <AuthModal />
    </Fragment>
  );
};

export default Auth;
