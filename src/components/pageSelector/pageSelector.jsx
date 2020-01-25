import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./pageSelector.scss";

const darkConfig = {
  "/": false,
  "/profile": false,
  "/work": false,
  "/contact": true
};

const PageOption = ({ label, icon, url }) => {
  const location = useLocation();

  return (
    <div
      className={`page-options__option${location.pathname === url ? "--selected" : ""}`}
    >
      <Link to={url}>
        <div
          className={`page-options__option__icon far fa-${icon} fa-2x`}
        ></div>
        <label>
          <span>{label}</span>
        </label>
      </Link>
    </div>
  );
};

const PageSelector = () => {
  const location = useLocation();

  return (
    <div className={`page-options ${darkConfig[location.pathname] ? "page-options--dark" : ""}`}>
      <PageOption label="Home" icon="user" url="/" />
      <PageOption label="Profile" icon="address-card" url="/profile" />
      <PageOption label="Work" icon="folder-open" url="/work" />
      <PageOption label="Contact" icon="comment" url="/contact" />
    </div>
  );
};

export default PageSelector;
