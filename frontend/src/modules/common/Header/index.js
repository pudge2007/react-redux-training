import React from "react";
import { Link } from "react-router-dom";
import Auth from "modules/auth";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Kinopoisk
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/categories" className="nav-link">
                Категории
              </Link>
            </li>
          </ul>
        </div>

        <Auth />
      </div>
    </nav>
  );
};

export default Header;
