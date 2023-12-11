import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className="dropdown-menu"
                  style={{
                    backgroundColor:
                      props.mode === "dark" ? "#282c34" : "white",
                    color: props.mode === "light" ? "white" : "black",
                  }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                    >
                      Action
                    </a>
                  </li>
                  <li
                    style={{
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <div
              className={`form-check form-switch text.${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
                style={{ cursor: "pointer" }}
              />
              <label
                className={`form-check-label" text.${
                  props.mode === "light" ? "dark" : "light"
                } " htmlFor="flexSwitchCheckDefault`}
              >
                {props.toText}
              </label>
            </div>
            <form className="d-flex mx-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
