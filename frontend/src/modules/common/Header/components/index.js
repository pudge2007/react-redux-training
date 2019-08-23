import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "modules/auth";
import SignOut from "modules/auth/containers/SignOutContainer";
import { getIsLogin } from "modules/auth/selectors";

class Header extends Component {
  render() {
    const { isLogin } = this.props;

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
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

        {isLogin ? <SignOut /> : <SignIn />}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: getIsLogin(state)
  };
};

export default connect(mapStateToProps)(Header);
