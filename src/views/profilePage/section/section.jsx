import { useState, createRef, cloneElement } from "react";
import { useAnimation, motion } from "framer-motion";

import { letterAnimation } from "utils/animationHelpers";

import { isSectionInView } from "../helper";
import { letterVariants } from "../variants";

import "./section.scss";

const sectionLetterVariants = {
  hover: letterVariants.hover,
  "page-initial": {
    y: "5rem",
    opacity: 0
  },
  "section-in": {
    y: "0rem",
    opacity: 1
  },
  "section-out": {
    y: "5rem",
    opacity: 0
  }
};

const sectionHeaderVariants = {
  "page-initial": {
    transform: "translate(-50%, 5rem)",
    opacity: 0
  },
  "section-in": {
    transform: "translate(-50%, 0rem)",
    opacity: 1
  },
  "section-out": {
    opacity: 0
  }
};

const Section = ({ scrollY, children, className, sectionTitle }) => {
  const [previouslyInView, setPreviouslyInView] = useState(false);
  const [sectionRef] = useState(createRef());
  const sectionAnimationControl = useAnimation();
  const inView = isSectionInView(sectionRef.current, scrollY);

  if (previouslyInView !== inView) {
    setPreviouslyInView(inView);
    sectionAnimationControl.start(inView ? "section-in" : "section-out");
  }

  return (
    <div className="section" data-type="parallax" data-depth="1">
      <div className="section__header">
        <motion.h1
          className="font--subtitle"
          animate={sectionAnimationControl}
          variants={sectionHeaderVariants}
        >
          {letterAnimation(sectionTitle, sectionLetterVariants)}
        </motion.h1>
      </div>
      <div className={className} ref={sectionRef}>
        {cloneElement(children, { scrollY, sectionAnimationControl })}
      </div>
    </div>
  );
};

export default Section;
