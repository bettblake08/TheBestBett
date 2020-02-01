import React from "react";
import { motion } from "framer-motion";
import { useLocation, useHistory } from "react-router-dom";
import { pageOpenTransition, pageCloseTransition, transitionPaceReducer } from "./slideConfig";
import PageSelector from "../pageSelector";
import Header from "../header";
import Slider from "./slide";

const pages = ["/", "/profile", "/work"];

const mainPageConfig = {
  initial: "page-initial",
  animate: "page-in",
  exit: "page-out",
  variants: {
    "page-initial": {
      width: "0%"
    },
    "page-in": {
      width: "100%",
      transition: pageOpenTransition
    },
    "page-out": {
      width: "0%",
      transition: pageCloseTransition
    }
  },
  style: {
    position: "absolute"
  }
};

const viewVariants = {
  "page-in": {
    transition: {
      staggerChildren: 0.3 / transitionPaceReducer,
      delayChildren: 7 / transitionPaceReducer
    }
  },
  "page-out": {
    transition: {
      staggerChildren: 0.3 / transitionPaceReducer,
      delayChildren: 7 / transitionPaceReducer
    }
  }
};

const viewPlaceholderConfig = {
  className: "page__holder",
  initial: "page-initial",
  animate: "page-in",
  exit: "page-out",
  variants: {
    "page-initial": {
      width: "0%"
    },
    "page-in": {
      width: "100%",
      transition: pageOpenTransition
    },
    "page-out": {
      width: "0%",
      transition: pageCloseTransition
    }
  }
};

const SlidingPage = props => {
  const { children, className } = props;
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <Slider direction="left" />
      <motion.div
        {...mainPageConfig}
        className="page__window"
        onPan={(event, info) => {
          if (info.delta.y > 10) {
            const pageIndex = pages.findIndex(
              page => page === location.pathname
            );
            if (pageIndex + 1 !== pages.length)
              history.push(pages[pageIndex + 1]);
          } else if (info.delta.y < -10) {
            const pageIndex = pages.findIndex(
              page => page === location.pathname
            );
            if (pageIndex !== 0) history.push(pages[pageIndex - 1]);
          }
        }}
      >
        <motion.div
          variants={viewVariants}
          className={`page__view ${className}`}
        >
          <Header />
          <PageSelector />
          {children}
        </motion.div>
      </motion.div>
      <motion.div {...viewPlaceholderConfig}></motion.div>
      <Slider direction="right" />
    </>
  );
};

export default SlidingPage;
