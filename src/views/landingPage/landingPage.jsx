import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import Typed from "typed.js";
import SlidingPage from "../../components/slidingPage/slidingPage";
import { letterAnimation } from "../../utilities/animationHelpers";
import GlobalVariants from "../../utilities/globalVariants";
import Button from "../../components/button";
import me from "../../me";

import ProPicture from "../../assets/images/pro-picture.png";
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

const imageVariants = {
  "page-initial": {
    opacity: 0,
    x: "50%"
  },
  "page-in": {
    opacity: 1,
    x: "0%"
  },
  "page-out": {
    opacity: 0,
    x: "50%"
  }
};

const slideInFromLeft = {
  "page-initial": GlobalVariants.slideInFromLeft.initial,
  "page-in": GlobalVariants.slideInFromLeft.enter,
  "page-out": GlobalVariants.slideInFromLeft.exit
};

export default () => {
  const history = useHistory();
  const [typeRef, setTypeRef] = useState(null);
  const [components, setComponents] = useState({})

  useEffect(() => {
    if (typeRef !== null) {
      setTimeout(() => {
        // eslint-disable-next-line no-unused-vars
        let typed = new Typed(typeRef, {
          strings: me.whoAmI,
          loop: true,
          typeSpeed: 100
        });
      }, 3000);
    }
  }, [typeRef]);

  return (
    <SlidingPage className="landing-page">
      <motion.div className="landing-page__picture" variants={imageVariants}>
        <img src={ProPicture} alt="Brian Bett" />
      </motion.div>
      <div className="landing-page__info">
        <motion.div className="info__intro">
          <motion.div className="info__intro__greeting" variants={variants}>
            {letterAnimation("Hi, I'm")}
          </motion.div>
          <motion.div className="info__intro__name" variants={variants}>
            {letterAnimation(me.name.caps)}
          </motion.div>
        </motion.div>

        <div className="info__job">
          <motion.div variants={variants}>
            {letterAnimation("I'm a ")}
          </motion.div>
          <motion.span
            className="info__job__title"
            style={{ whiteSpace: "pre" }}
            ref={ref => setTypeRef(ref)}
            variants={slideInFromLeft}
          ></motion.span>
        </div>

        <motion.div className="info__button" variants={slideInFromLeft}>
          <Button
            defaultStatus={0}
            parent={{ components, setComponents }}
            name="contactButton"
            config={{
              icon: "arrow-right",
              label: "Contact Me",
              action: () => history.push("/contact"),
              reverse: true
            }}
          />
        </motion.div>
      </div>
    </SlidingPage>
  );
};
