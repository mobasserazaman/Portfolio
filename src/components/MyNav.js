import React from "react";
import { useState, useEffect } from "react";

// Note: Mixing jQuery with React is not recommended as they
// both manipulate the DOM differently. While it may seem an easy
// solution, it might result in bigger problems.

export const MyNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const show = collapsed ? "show" : "";

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" style={{ marginLeft: "5vw" }} href="#about">
          Mobassera Zaman
        </a>
        <button
          style={{ marginRight: "5vw" }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show} id="navbarNav">
          <ul
            className="navbar-nav"
            style={{ marginLeft: "5vw", fontSize: "13px" }}
          >
            <li className="nav-item active">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Resume.pdf">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Cover Letter.pdf">
                Cover Letter
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
