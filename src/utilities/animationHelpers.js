import React from "react";
import { motion } from "framer-motion";

const defaultVariants = {
  "page-initial": {
    opacity: 0,
    y: "3rem"
  },
  "page-in": {
    opacity: 1,
    y: "0rem"
  },
  "page-out": {
    opacity: 0,
    y: "-3rem"
  }
};

export const letterAnimation = (word, variants = {}) => {
  let hasSpace = false;
  return Array.from(word).map((letter, index) => {
    if (letter === " ") {
      hasSpace = true;
      return null;
    }

    const style = { float: "left", marginLeft: hasSpace ? "1rem" : 0 };
    hasSpace = false;

    return (
      <motion.span
        key={index}
        variants={{ ...defaultVariants, variants }}
        style={style}
      >
        {letter}
      </motion.span>
    );
  });
};
