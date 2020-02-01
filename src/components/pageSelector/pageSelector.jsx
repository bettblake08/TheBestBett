import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./pageSelector.scss";

const darkConfig = {
  "/": false,
  "/profile": true,
  "/work": false,
  "/contact": true
};

const optionVariants = {
  "page-initial": {
    opacity: 0,
    transform: "translateX(-5rem)"
  },
  "page-in": {
    opacity: 1,
    transform: "translateX(0)"
  },
  "page-out": {
    opacity: 0
  }
};

const selectorVariants = {
  "page-in": {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 2
    }
  },
  "page-out": {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const PageOption = ({ label, icon, url }) => {
  const location = useLocation();

  return (
    <motion.div
      className={`page-options__option${
        location.pathname === url ? "--selected" : ""
      }`}
      variants={optionVariants}
    >
      <Link to={url}>
        <div
          className={`page-options__option__icon far fa-${icon} fa-2x`}
        ></div>
        <label>
          <span>{label}</span>
        </label>
      </Link>
    </motion.div>
  );
};

const PageSelector = () => {
  const location = useLocation();

  return (
    <motion.div
      className={`page-options ${
        darkConfig[location.pathname] ? "page-options--dark" : ""
      }`}
      variants={selectorVariants}
    >
      <PageOption label="Home" icon="user" url="/" />
      <PageOption label="Profile" icon="address-card" url="/profile" />
      <PageOption label="Work" icon="folder-open" url="/work" />
      <PageOption label="Contact" icon="comment" url="/contact" />
    </motion.div>
  );
};

export default PageSelector;
