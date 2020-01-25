import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/images/thebestbett-1.png";
import LogoDark from "../../assets/images/thebestbett-black-1.png";

import "./header.scss";
import { motion } from "framer-motion";


const headerStyleConfig = {
  "/": {
    isLogoDark: false,
    isSocialDark: false
  },
  "/profile": {
    isLogoDark: false,
    isSocialDark: false
  },
  "/work": {
    isLogoDark: false,
    isSocialDark: true
  },
  "/contact": {
    isLogoDark: true,
    isSocialDark: true
  }
};

const SocialLink = ({icon, url = ""}) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <motion.a whileHover={{ scale: 1.5 }}
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
    <div className="header">
      <div className="header__logo">
        <img src={style.isLogoDark ? LogoDark : Logo} alt="TheBestBett logo" />
      </div>
      <div className={`header__socials${style.isSocialDark ? "--dark" : ""}`}>
        <SocialLink
          icon="facebook"
          url="https://www.facebook.com/bett.blake.bryan"
        />
        <SocialLink icon="twitter" url="https://twitter.com/thebest_bett" />
        <SocialLink icon="linkedin" url="https://linkedin.com/in/bettbrian08" />
        <SocialLink icon="github" url="https://github.com/bettblake08" />
      </div>
    </div>
  );
}

export default Header;
