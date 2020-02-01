import React from 'react';
import { motion } from "framer-motion";
import { pageOpenTransition, pageCloseTransition } from "./slideConfig";

const transitionPaceReducer = 5;

const slideConfig = {
  initial: "page-initial",
  animate: "page-in",
  exit: "page-out",
  variants: {
    "page-initial": {
      width: "50%"
    },
    "page-in": {
      width: "0%",
      transition: {
        ...pageOpenTransition,
        staggerChildren: 1 / transitionPaceReducer
      }
    },
    "page-out": {
      width: "50%",
      transition: {
        ...pageCloseTransition,
        staggerChildren: 2 / transitionPaceReducer,
        staggerDirection: -1
      }
    }
  }
};

const generateConfig = direction => ({
  variants: {
    "page-initial": {
      [direction]: "100%"
    },
    "page-in": {
      [direction]: ["100%", "0%"]
    },
    "page-out": {
      [direction]: ["0%", "100%"]
    }
  },
  transition: {
    duration: 3 / transitionPaceReducer,
    ease: "anticipate"
  }
})

const Slide = ({ direction }) => {
    return (
      <motion.div
        {...slideConfig}
        className={`page__slide page__slide--${direction}`}
      >
        <motion.div {...generateConfig(direction)}></motion.div>
        <motion.div {...generateConfig(direction)}></motion.div>
        <motion.div {...generateConfig(direction)}></motion.div>
      </motion.div>
    );
}

export default Slide;
