import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import AppContext from "app/context";
import Logo from "assets/images/thebestbett-1.png";
import LogoDark from "assets/images/thebestbett-black-1.png";
import Profile from "me";

import "./header.scss";

const headerStyleConfig = {
  "/": {
    isPageSelectorToggleDark: false,
    isLogoDark: false,
    isSocialDark: false
  },
  "/profile": {
    isPageSelectorToggleDark: true,
    isLogoDark: true,
    isSocialDark: true
  },
  "/work": {
    isPageSelectorToggleDark: false,
    isLogoDark: false,
    isSocialDark: true
  },
  "/contact": {
    isPageSelectorToggleDark: false,
    isLogoDark: false,
    isSocialDark: false
  }
};

const SocialLink = ({ icon, url = "" }) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a
    href={url}
    className={`fab fa-${icon} fa-2x`}
    target="_blank"
    rel="noreferrer noopener"
  />
);

const Header = () => {
  const location = useLocation();
  const style = headerStyleConfig[location.pathname];

  return (
    <AppContext.Consumer>
      {value => (
        <div className="header">
          <div className="header__content">
            <div
              className={`header__page-selector-toggle hamburger hamburger--spin ${
                value.pageSelector.isVisible ? "is-active" : ""
              }`}
              type="button"
              onClick={value.togglePageSelector}
            >
              <span className="hamburger-box">
                <span
                  className={`hamburger-inner ${
                    style.isPageSelectorToggleDark ? "dark" : ""
                  }`}
                ></span>
              </span>
            </div>
            <motion.div
              className={`header__logo ${
                value.header.isLogoHidden ? "header__logo--hidden" : ""
              }`}
            >
              <img
                src={style.isLogoDark ? LogoDark : Logo}
                alt="TheBestBett logo"
              />
            </motion.div>
            <div
              className={`header__socials${style.isSocialDark ? "--dark" : ""}`}
            >
              <SocialLink {...Profile.socials.facebook} />
              <SocialLink {...Profile.socials.twitter} />
              <SocialLink {...Profile.socials.linkedin} />
              <SocialLink {...Profile.socials.github} />
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Header;
