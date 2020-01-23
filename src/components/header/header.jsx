import React, { Component } from "react";
import "./header.scss";

import Logo from "../../assets/images/thebestbett-1.png";

class Header extends Component {
  renderSocialLink = (icon, url = "") => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={url}
      className={`fab fa-${icon} fa-2x`}
      target="_blank"
      rel="noreferrer noopener"
    />
  );

  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="TheBestBett logo" />
        </div>
        <div className="header__socials">
          {this.renderSocialLink(
            "facebook",
            "https://www.facebook.com/bett.blake.bryan"
          )}
          {this.renderSocialLink("twitter", "https://twitter.com/thebest_bett")}
          {this.renderSocialLink(
            "linkedin",
            "https://linkedin.com/in/bettbrian08"
          )}
          {this.renderSocialLink("github", "https://github.com/bettblake08")}
        </div>
      </div>
    );
  }
}

export default Header;
