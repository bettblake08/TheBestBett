import React, { useState } from "react";
import { motion } from "framer-motion";

import GlobalVariants from "utils/globalVariants";
import { isScreenMobile } from "utils/helpers";

import { getSectionVariants } from "../helper";
import Section from "../section";

import "./skillsSection.scss";

const SkillsSectionContext = React.createContext({});

const slideInFromRight = getSectionVariants(GlobalVariants.slideInFromRight);
const slideInFromLeft = getSectionVariants(GlobalVariants.slideInFromLeft);
const slideInFromBottom = getSectionVariants(GlobalVariants.slideInFromBottom);


const SkillCard = ({ title, skills, id, children, variants }) => (
  <SkillsSectionContext.Consumer>
    {value => (
      <motion.div
        className={`skill-card ${
          value.openCard === id ? "skill-card--active" : ""
        }`}
        onClick={() => value.setOpenCard(id === value.openCard ? "" : id)}
        data-key={id}
        variants={variants}
        animate={value.sectionAnimationControl}
      >
        <div className="skill-card__content">
          <div className="skill-card__front">
            <h1 className="font--header">{title}</h1>
            <div className="skill-card__list">
              {skills.map((skill, index) => (
                <p key={index} className="font--normal">
                  {skill}
                </p>
              ))}
            </div>
            <div className="skill-card__front__click font--normal">
              <i className="fa fas fa-hand-point-up" />
              <span className="font--comment">to see more!</span>
            </div>
          </div>
          <div className="skill-card__back">
            <h1 className="font--header">{title}</h1>
            <div className="skill-card__back__list">{children}</div>
          </div>
        </div>
      </motion.div>
    )}
  </SkillsSectionContext.Consumer>
);

const SkillItem = ({ name, tags = [] }) => (
  <p className="font--normal">
    {name} {tags.map((tag, index) => (<span className="font--comment" key={index}>{tag}</span>))}
  </p>
);

const TechStackSkillCard = () => (
  <SkillCard
    title="Tech Stack"
    skills={["PHP", "Javascript", "Python"]}
    id="tech-stack"
    variants={isScreenMobile() ? slideInFromBottom : slideInFromLeft}
  >
    <h2 className="font--header--2">Languages</h2>
    <SkillItem name="PHP" />
    <SkillItem name="Javascript" />
    <SkillItem name="Python" />
    {/* <SkillItem name="Scala" /> */}

    <h2 className="font--header--2">Framework/Libraries</h2>
    <SkillItem name="Laravel" tags={["PHP"]} />
    <SkillItem name="React" tags={["Javascript"]} />
    <SkillItem name="Yii" tags={["PHP"]} />
    <SkillItem name="Flask" tags={["Python"]} />
    <SkillItem name="Django" tags={["Python"]} />
    {/* <SkillItem name="Play" tags={["Scala"]} /> */}
  </SkillCard>
);

const ToolsSkillCard = () => (
  <SkillCard
    title="Tools"
    skills={["VSCode", "PHPStorm", "InVision"]}
    id="tools"
    variants={slideInFromBottom}
  >
    <h2 className="font--header--2">IDE</h2>
    <SkillItem name="VSCode" tags={["Javascript", "Python", "Scala"]} />
    <SkillItem name="PHPStorm" tags={["PHP"]} />

    <h2 className="font--header--2">DevOps Tools</h2>
    <SkillItem name="CircleCI" />
    <SkillItem name="Jenkins" />
    <SkillItem name="TravisCI" />
    <SkillItem name="Heroku" />

    <h2 className="font--header--2">Design Tools</h2>
    <SkillItem name="Adobe XD" />
    <SkillItem name="Invision" />
    <SkillItem name="Photoshop" />
    <SkillItem name="Zeplin" />
  </SkillCard>
);

const SoftSkillCard = () => (
  <SkillCard
    title="Soft Skills"
    skills={["Leadership", "Communication", "Pro-active"]}
    id="soft-skills"
    variants={isScreenMobile() ? slideInFromBottom : slideInFromRight}
  >
    <h2 className="font--header--2">Team Skills</h2>
    <SkillItem name="Leadership" />
    <SkillItem name="Communication" />
    <SkillItem name="Problem Solver" />
    <SkillItem name="Pro-active" />

    <h2 className="font--header--2">Project Management Skills</h2>
    <SkillItem name="Holistic Thinker" />
  </SkillCard>
);

const SkillsSection = ({ sectionAnimationControl }) => {
  const [openCard, setOpenCard] = useState("");

  return (
    <SkillsSectionContext.Provider
      value={{ openCard, setOpenCard, sectionAnimationControl }}
    >
      <div className="p-skills__content">
        <TechStackSkillCard />
        <ToolsSkillCard />
        <SoftSkillCard />
      </div>
    </SkillsSectionContext.Provider>
  );
}

export default ({ scrollY }) => (
  <Section
    className="p-skills"
    scrollY={scrollY}
    sectionTitle="Technical and Soft Skills"
  >
    <SkillsSection />
  </Section>
);
