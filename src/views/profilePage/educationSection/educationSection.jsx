import React from "react";
import { motion } from "framer-motion";
import Section from "../section";
import JULogo from "../../../assets/images/Jiangsu_University_logo.png";
import GlobalVariants from "../../../utilities/globalVariants";
import { getSectionVariants } from "../helper";
import "./educationSection.scss";

const slideInFromRight = getSectionVariants(GlobalVariants.slideInFromRight);

const EducationSection = ({ controls }) => (
  <>
    <div className="p-education__info">
      <motion.div
        className="p-education__info__left"
        variants={slideInFromRight}
        animate={controls}
      >
        <h4>2017</h4>
        <h1>Computer Science And Technology</h1>
        <h3>Bachelor's Degree Graduate</h3>
      </motion.div>
    </div>
    <div className="p-education__logo" data-type="parallax" data-depth="0.5">
      <img src={JULogo} alt="Jiangsu University Logo" />
    </div>
  </>
);

export default props => (
  <Section className="p-education" scrollY={props.scrollY}>
    <EducationSection />
  </Section>
);
