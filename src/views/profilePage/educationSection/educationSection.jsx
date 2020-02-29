import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../section";
import Button from "../../../components/button";
import GlobalVariants from "../../../utilities/globalVariants";
import { getSectionVariants } from "../helper";
import me from "../../../me";

import JULogo from "../../../assets/images/Jiangsu_University_logo.png";
import "./educationSection.scss";

const slideInFromRight = getSectionVariants(GlobalVariants.slideInFromRight);

const EducationSection = ({ controls }) => {
  const [components, setComponents] = useState({});

  return (
    <>
      <div className="p-education__info">
        <motion.div
          className="p-education__info__left"
          variants={slideInFromRight}
          animate={controls}
        >
          <h4>{me.education.bachelors.year}</h4>
          <h1>{me.education.bachelors.major}</h1>
          <h3>{me.education.bachelors.level}</h3>

          <div className="p-education__info__button">
            <Button
              defaultStatus={0}
              parent={{ components, setComponents }}
              name="juButton"
              config={{
                icon: "arrow-right",
                label: "Visit the homepage",
                action: () =>
                  (window.location.href = me.education.bachelors.homepage)
              }}
            />
          </div>
        </motion.div>
      </div>
      <div className="p-education__logo" data-type="parallax" data-depth="0.5">
        <img src={JULogo} alt={`${me.education.bachelors.name} Logo`} />
      </div>
    </>
  );
}

export default props => (
  <Section className="p-education" scrollY={props.scrollY}>
    <EducationSection />
  </Section>
);
