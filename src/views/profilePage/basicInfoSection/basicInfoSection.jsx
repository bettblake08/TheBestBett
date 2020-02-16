import React from "react";
import { motion } from "framer-motion";
import Section from "../section";
import GlobalVariants from "../../../utilities/globalVariants";
import { getSectionVariants } from "../helper";

import "./basicInfoSection.scss";

const getAge = () => {
  const birthDate = new Date(1996, 7, 21);
  return Math.abs(
    Math.round(
      (Date.now() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
    )
  );
};

const slideInFromRight = getSectionVariants(GlobalVariants.slideInFromRight);
const slideInFromLeft = getSectionVariants(GlobalVariants.slideInFromLeft);

const stagger = {
  staggerChildren: 0.3,
  delayChildren: 0.3
};

const BasicInfoSection = ({ controls }) => (
  <>
    <motion.div className="p-basic__age" transition={stagger}>
      <motion.h4 variants={slideInFromLeft} animate={controls}>
        AGE
      </motion.h4>
      <motion.h1 variants={slideInFromLeft} animate={controls}>
        {getAge()}
      </motion.h1>
      <motion.span
        variants={slideInFromRight}
        animate={controls}
      >
        YRS
      </motion.span>
    </motion.div>

    <motion.div
      className="p-basic__detail"
      style={{ gridArea: "nationality" }}
      transition={stagger}
    >
      <motion.h4 variants={slideInFromRight} animate={controls}>
        Nationality
      </motion.h4>
      <motion.h1 variants={slideInFromRight} animate={controls}>
        KENYA
      </motion.h1>
    </motion.div>

    <motion.div
      className="p-basic__detail"
      style={{ gridArea: "exp" }}
      transition={stagger}
    >
      <motion.h4 variants={slideInFromRight} animate={controls}>
        Experience
      </motion.h4>
      <motion.h1 variants={slideInFromRight} animate={controls}>
        2 YEARS
      </motion.h1>
    </motion.div>

    <motion.div
      className="p-basic__detail"
      style={{ gridArea: "signs" }}
      transition={stagger}
    >
      <motion.h4 variants={slideInFromRight} animate={controls}>
        Signs
      </motion.h4>
      <motion.div
        className="p-basic__signs"
        variants={slideInFromRight}
        animate={controls}
      >
        <span className="cancer-icon" />
        <span className="rat-icon" />
      </motion.div>
    </motion.div>
  </>
);

export default (props) => {
  const { scrollY } = props;
  return (
    <Section className='p-basic' scrollY={scrollY}>
      <BasicInfoSection {...props}/>
    </Section>
  );
};
