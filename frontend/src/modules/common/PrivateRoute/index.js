import React from "react";
import { Route, Redirect } from "react-router/";
import { connect } from "react-redux";

import { getIsAuthenticated } from "modules/auth/selectors";

const PrivateRoute = ({ component, ...props }) => {
  const RouteComponent = <Route component={component} {...props} />;
  const RedirectComponent = <Redirect to="/" />;
  return props.isAuthenticated ? RouteComponent : RedirectComponent;
};

const mapStateToProps = state => {
  return {
    isAuthenticated: getIsAuthenticated(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
