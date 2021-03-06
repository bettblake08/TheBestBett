import { useState } from "react";
import { motion } from "framer-motion";

import JULogo from "assets/images/Jiangsu_University_logo.png";
import JUImage from "assets/images/ju.jpg";
import Button from "components/button";
import GlobalVariants from "utils/globalVariants";
import me from "me";

import { getSectionVariants } from "../helper";
import Section from "../section";

import "./educationSection.scss";

const slideInFromRight = getSectionVariants(GlobalVariants.slideInFromRight);

const EducationSectionContent = ({ sectionAnimationControl }) => {
  const [components, setComponents] = useState({});
  return (
    <>
      <div className="p-education__image">
        <img src={JUImage} alt="Jiangsu University" />
      </div>
      <div className="p-education__info">
        <motion.div
          className="p-education__info__left"
          variants={slideInFromRight}
          animate={sectionAnimationControl}
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
                  window.open(me.education.bachelors.homepage, "_blank"),
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
};

const EducationSection = props => (
  <Section
    className="p-education"
    scrollY={props.scrollY}
    sectionTitle="Education"
  >
    <EducationSectionContent />
  </Section>
);

export default EducationSection;
