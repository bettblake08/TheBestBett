import React, { Component } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import mainSliderConfig from "../../utilities/mainPageSlider";
import SlidingPage from "../../components/slidingPage/slidingPage";
import "./landingPage.scss";
import { letterAnimation } from "../../utilities/animationHelpers";

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
  componentDidMount(){
    setTimeout(() => {
      let typed = new Typed(this.el, {
        strings: ["Software Engineer", "Fullstack Engineer", "UI Designer"],
        loop: true,
        typeSpeed: 100
      });
    }, 3000);
  }
  
  render() {
    return (
      <SlidingPage {...mainSliderConfig} className="landing-page">
        <div className="landing-page__info">
          <motion.div className="info__intro">
            <h3>Hi, I'm</h3>
            <motion.div className="info__intro__name" variants={variants}>
              {letterAnimation("Brian Kipkirui Bett")}
            </motion.div>
          </motion.div>

          <div className="info__job">
            <motion.div variants={variants}>
              {letterAnimation("I'm a ")}
            </motion.div>
            <span
              class="info__job__title"
              style={{ whiteSpace: "pre" }}
              ref={ref => (this.el = ref)}
            ></span>
          </div>
        </div>
      </SlidingPage>
    );
  }
}
