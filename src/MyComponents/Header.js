import React from "react";
import propTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink
              className="nav-link"
              to="/"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              activeStyle={"fontWeight:bold"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              className={(isActive) =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              activeStyle={"fontWeight:bold"}
            >
              About
            </NavLink>
          </li>
        </ul>
        {props.searchbar ? (
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        ) : (
          " "
        )}
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "MY TITLE GOES HERE",
  searchbar: false,
};
Header.propTypes = {
  title: propTypes.string,
  searchbar: propTypes.bool,
};
