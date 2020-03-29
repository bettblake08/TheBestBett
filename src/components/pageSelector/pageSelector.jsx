import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { isScreenMobile } from "../../utilities/helpers";
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
    transform: "translateX(-5rem) scale(0.6)"
  },
  "entrance": {
    opacity: 1,
    transform: "translateX(0) scale(1)"
  },
  "exit": {
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

const rotateLoop = {
  rotate: 360,
  transition: {
    rotate: {
      ease: "linear",
      duration: 15,
      loop: Infinity
    },
    scale: {
      ease: "linear",
      duration: 0.2,
      loop: false
    }
  }
};

const innerRingVariant = {
  hover: {
    scale: 1.8,
    ...rotateLoop
  }
};

const outerRingVariant = {
  hover: {
    scale: 1.4,
    ...rotateLoop
  }
};


const PageOption = ({ label, icon, url }) => {
  const location = useLocation();

  return (
    <motion.div
      className={`p-button${
        location.pathname === url ? "--selected" : ""
      }`}
      variants={optionVariants}
      whileHover="hover"
    >
      <Link to={url}>
        <motion.svg
          whileHover="hover"
          variants={innerRingVariant}
          className="p-button__circle"
        >
          <circle
            className="p-button__circle--inner"
            strokeWidth="1"
            fill="transparent"
            r="22"
            cx="50%"
            cy="50%"
          />
        </motion.svg>
        <motion.svg
          whileHover="hover"
          variants={outerRingVariant}
          className="p-button__circle"
        >
          <circle
            className="p-button__circle--outer"
            strokeWidth="1"
            fill="transparent"
            r="22"
            cx="50%"
            cy="50%"
          />
        </motion.svg>
        <div className="p-button__icon">
          <i className={`far fa-${icon} fa-${isScreenMobile() ? '3' : '2'}x center`} />
        </div>
        <label>
          <span className="font--normal">{label}</span>
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
      animate="entrance"
      exit="exit"
      variants={selectorVariants}
    >
      <div className="page-options__content center">
        <PageOption label="Home" icon="user" url="/" />
        <PageOption label="Profile" icon="address-card" url="/profile" />
        <PageOption label="Work" icon="folder-open" url="/work" />
        <PageOption label="Contact" icon="comment" url="/contact" />
      </div>
    </motion.div>
  );
};

export default PageSelector;
