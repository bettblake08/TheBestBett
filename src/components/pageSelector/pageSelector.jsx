import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./pageSelector.scss";

class PageSelector extends Component {
  navigateTo = () => {};

  renderPageOptions = (label, icon, url) => (
    <div className="page-options__option">
      <Link to={url}>
        <div className={`page-options__option__icon far fa-${icon} fa-2x`}></div>
        <label>
          <span>{label}</span>
        </label>
      </Link>
    </div>
  );

  render() {
    return (
      <div className="page-options">
        {this.renderPageOptions("Home", "user", "/")}
        {this.renderPageOptions("Profile", "address-card", "/profile")}
        {this.renderPageOptions("Work", "folder-open", "/work")}
        {this.renderPageOptions("Contact", "comment", "/contact")}
      </div>
    );
  }
}

export default PageSelector;
