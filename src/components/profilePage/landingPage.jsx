import React from 'react';
import { motion } from "framer-motion";
import mainSliderConfig from "../../utilities/mainPageSlider";

import "./landingPage.scss";

export default () => (
  <motion.div {...mainSliderConfig} >
    <div className="landing-page__info">
      <div className="info__intro">
        <h3>Hi, I'm</h3>
        <h1>Brian K. Bett</h1>
      </div>

      <div className="info__job">
        <p>I'm a </p>
        <span>Software Engineer</span>
      </div>
    </div>
  </motion.div>
);
