import React, { Component } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import SlidingPage from "../../components/slidingPage/slidingPage";
import { letterAnimation } from "../../utilities/animationHelpers";
import Button from "../../components/button";
import ProPicture from "../../assets/images/pro-picture.png";
import "./landingPage.scss";
import { useHistory } from "react-router-dom";

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

const imageVariants = {
  "page-initial": {
    opacity: 0,
    x: "10rem"
  },
  "page-in": {
    opacity: 1,
    x: "0rem"
  },
  "page-out": {
    opacity: 0,
    x: "10rem"
  }
};

export default class LandingPage extends Component {
  state = {

  }

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

  setComponents = component => this.setState(state => ({ ...state, component }))

  render() {
    const { components } = this.state;
    const history = useHistory();

    return (
      <SlidingPage className="landing-page">
        <div className="landing-page__info">
          <motion.div className="info__intro">
            <motion.div className="info__intro__greeting" variants={variants}>
              {letterAnimation("Hi, I'm")}
            </motion.div>
            <motion.div className="info__intro__name" variants={variants}>
              {letterAnimation("BRIAN KIPKIRUI BETT")}
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

          <div className="info__button">
            <Button
              defaultStatus={7}
              parent={{ components, setComponents: this.setComponents }}
              name="contactButton"
              config={{
                icon: "arrow-right",
                label: "Contact me",
                action: () => history.push('/contact'),
                reverse: true
              }}
            />
          </div>
        </div>
        <motion.div className="landing-page__picture" variants={imageVariants}>
          <img src={ProPicture} alt="Brian Bett" />
        </motion.div>
      </SlidingPage>
    );
  }
}
