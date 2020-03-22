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

const sectionName = "p-basic";
const slideInFromRight = getSectionVariants(GlobalVariants.slideInFromRight);
const slideInFromLeft = getSectionVariants(GlobalVariants.slideInFromLeft);

const stagger = {
  staggerChildren: 0.3,
  delayChildren: 0.3
};

const BasicInfoSection = ({ sectionAnimationControl  }) => (
  <>
    <motion.div className="p-basic__age" transition={stagger}>
      <motion.h4
        variants={slideInFromLeft}
        animate={sectionAnimationControl}
      >
        AGE
      </motion.h4>
      <motion.h1
        variants={slideInFromLeft}
        animate={sectionAnimationControl}
      >
        {getAge()}
      </motion.h1>
      <motion.span
        variants={slideInFromRight}
        animate={sectionAnimationControl}
      >
        YRS
      </motion.span>
    </motion.div>

    <motion.div
      className="p-basic__detail"
      style={{ gridArea: "nationality" }}
      transition={stagger}
    >
      <motion.h4
        variants={slideInFromRight}
        animate={sectionAnimationControl}
      >
        Nationality
      </motion.h4>
      <motion.h1
        variants={slideInFromRight}
        animate={sectionAnimationControl}
      >
        KENYA
      </motion.h1>
    </motion.div>

    <motion.div
      className="p-basic__detail"
      style={{ gridArea: "exp" }}
      transition={stagger}
    >
      <motion.h4
        variants={slideInFromRight}
        animate={sectionAnimationControl}
      >
        Experience
      </motion.h4>
      <motion.h1
        variants={slideInFromRight}
        animate={sectionAnimationControl}
      >
        2 YEARS
      </motion.h1>
    </motion.div>

    <motion.div
      className="p-basic__detail"
      style={{ gridArea: "signs" }}
      transition={stagger}
    >
      <motion.h4
        variants={slideInFromRight}
        animate={sectionAnimationControl}
      >
        Signs
      </motion.h4>
      <motion.div
        className="p-basic__signs"
        variants={slideInFromRight}
        animate={sectionAnimationControl}
      >
        <span className="cancer-icon" />
        <span className="rat-icon" />
      </motion.div>
    </motion.div>
  </>
);

export default ({ scrollY }) => (
  <Section className={sectionName} scrollY={scrollY} sectionTitle="Basic Information">
    <BasicInfoSection />
  </Section>
);
