import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import socials from "../../utilities/social";
import Logo from "../../assets/images/thebestbett-1.png";
import LogoDark from "../../assets/images/thebestbett-black-1.png";

import "./header.scss";

const headerStyleConfig = {
  "/": {
    isLogoDark: false,
    isSocialDark: false
  },
  "/profile": {
    isLogoDark: true,
    isSocialDark: true
  },
  "/work": {
    isLogoDark: false,
    isSocialDark: true
  },
  "/contact": {
    isLogoDark: false,
    isSocialDark: false
  }
};

const socialIconVariants = {
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.1
    }
  }
};

const SocialLink = ({ icon, url = "" }) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <motion.a
    variants={socialIconVariants}
    whileHover="hover"
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
        <SocialLink {...socials.facebook} />
        <SocialLink {...socials.twitter} />
        <SocialLink {...socials.linkedin} />
        <SocialLink {...socials.github} />
      </div>
    </div>
  );
};

export default Header;
