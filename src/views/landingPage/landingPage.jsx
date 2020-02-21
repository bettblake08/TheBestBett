import React, { Component } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import SlidingPage from "../../components/slidingPage/slidingPage";
import { letterAnimation } from "../../utilities/animationHelpers";
import "./landingPage.scss";

const variants = {
  "page-in": {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 2
    }
  },
  "page-out": {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default class LandingPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      // eslint-disable-next-line no-unused-vars
      let typed = new Typed(this.el, {
        strings: ["Software Engineer", "Fullstack Engineer", "UI Designer"],
        loop: true,
        typeSpeed: 100
      });
    }, 3000);
  }

  render() {
    return (
      <SlidingPage className="landing-page">
        <div className="landing-page__info">
          <motion.div className="info__intro">
            <motion.div className="info__intro__greeting" variants={variants}>
              {letterAnimation("Hi, I'm")}
            </motion.div>
            <motion.div className="info__intro__name" variants={variants}>
              {letterAnimation("BRIAN K. BETT")}
            </motion.div>
          </motion.div>

          <div className="info__job">
            <motion.div variants={variants}>
              {letterAnimation("I'm a ")}
            </motion.div>
            <span
              className="info__job__title"
              style={{ whiteSpace: "pre" }}
              ref={ref => (this.el = ref)}
            ></span>
          </div>
        </div>
      </SlidingPage>
    );
  }
}
