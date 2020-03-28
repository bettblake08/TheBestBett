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


const generateWord = (word, variants) =>
  Array.from(word).map((letter, index) => {
    if (letter === " ") return null;

    return (
      <motion.span
        key={index}
        variants={{ ...defaultVariants, ...variants }}
        whileHover="hover"
      >
        {letter}
      </motion.span>
    );
  });

export const letterAnimation = (text, variants = {}) => {
  let newWord = [];
  let result = [];
  const style = { float: "left" };

  Array.from(text).forEach(letter => {
    if (letter === " ") {
      result.push(<span style={style}> {generateWord(newWord, variants)} </span>);
      result.push(<span style={style}>&nbsp;</span>);
      newWord = [];
    } else {
      newWord.push(letter);
    }
  })

  if (newWord.length > 0) {
    result.push(<span style={style}> {generateWord(newWord, variants)} </span>);
  }

  return result;
};

/**
 * Returns the top and left page offsets
 * @param {Element} el
 */
export const getPageOffset = el => {
  let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const top = rect.top + scrollTop, left = rect.left + scrollLeft;
  return { top, left };
};
