import React from "react";
import { Route, Redirect } from "react-router/";
import { connect } from 'react-redux';

import { getIsLogin } from "modules/auth/selectors";

const PrivateRoute = ({ component, ...props }) => {
  const RouteComponent = <Route component={component} {...props} />;
  const RedirectComponent = <Redirect to="/" />;
  return props.isLogin ? RouteComponent : RedirectComponent;
};

const mapStateToProps = state => {
  return {
    isLogin: getIsLogin(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
