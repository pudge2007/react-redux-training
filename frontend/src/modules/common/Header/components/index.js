import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SignIn from "modules/auth/pages/SignIn";
import Logout from "modules/auth/components/LogoutMenu";
import { getIsAuthenticated, getUser } from "modules/auth/selectors";
import { logout } from "modules/auth/actions";

class Header extends Component {
  onLogout = () => {
    this.props.logout();
  };

  render() {
    const { isAuthenticated, user } = this.props;

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Kinopoisk
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/films" className="nav-link">
                  Фильмы
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/categories" className="nav-link">
                  Категории
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/ratings" className="nav-link">
                  Рейтинги
                </Link>
              </li>
            </ul>
          </div>

          {isAuthenticated ? (
            <Logout user={user} onLogout={this.onLogout} />
          ) : (
            <SignIn />
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: getUser(state),
    isAuthenticated: getIsAuthenticated(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: bindActionCreators(logout, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
