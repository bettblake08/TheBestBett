import React from "react";
import { motion } from "framer-motion";

import Header from "components/header";

const transitionPaceReducer = 3;

const boxShadow = "0rem 0.1rem 4rem -1.5rem #000 inset";
const mainPageConfig = {
  initial: "page-initial",
  animate: "page-in",
  exit: "page-out",
  variants: {
    "page-initial": {
      boxShadow
    },
    "page-in": {
      boxShadow: "0rem 0rem 0rem 0rem #000 inset",
      transition: {
        duration: 4 / transitionPaceReducer,
        ease: "anticipate"
      }
    },
    "page-out": {
      boxShadow,
      transition: {
        duration: 0.5 / transitionPaceReducer,
        ease: "anticipate"
      }
    }
  },
  style: {
    position: "absolute"
  }
};

const viewVariants = {
  "page-initial": {
    scale: 0.9,
    y: "100vh"
  },
  "page-in": {
    scale: 1,
    y: "0vh",
    transition: {
      scale: {
        delay: 3 / transitionPaceReducer,
        duration: 1 / transitionPaceReducer
      },
      y: {
        duration: 3 / transitionPaceReducer,
        ease: "anticipate"
      },
      staggerChildren: 0.3 / transitionPaceReducer,
      delayChildren: 7 / transitionPaceReducer
    }
  },
  "page-out": {
    scale: 0.9,
    y: "-100vh",
    transition: {
      y: {
        delay: 1 / transitionPaceReducer,
        duration: 3 / transitionPaceReducer,
        ease: "anticipate"
      },
      scale: {
        duration: 1 / transitionPaceReducer
      }
    }
  }
};

const SlidingPage = props => {
  const { children, className, onScroll = () => {} } = props;

  return (
    <>
      <div className="page__selector"></div>
      <motion.div {...mainPageConfig} className="page__window">
        <motion.div
          variants={viewVariants}
          className={`page__view ${className}`}
          onScroll={onScroll}
        >
          <Header />
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default SlidingPage;
