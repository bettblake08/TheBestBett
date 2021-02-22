import { motion } from "framer-motion";

import { letterAnimation } from "utils/animationHelpers";

import {
  textSlideInUpVariants,
  textSlideInLeftVariants,
  letterVariants,
  imageVariants
} from "../variants";

import Pic1 from "assets/images/IMG_20190804_182536_759.jpg";
import "./landingSection.scss";

export default () => (
  <div className="p-landing" data-type="parallax" data-depth="1">
    <div className="p-landing__content">
      <motion.div
        className="p-landing__greeting-image"
        variants={imageVariants.container}
        whileHover="hover"
      >
        <img src={Pic1} alt="greetings" />
      </motion.div>
      <motion.span variants={textSlideInLeftVariants}>
        {letterAnimation("HELLO", letterVariants)}
      </motion.span>
      <motion.span variants={textSlideInLeftVariants}>
        {letterAnimation("EVERYONE", letterVariants)}
      </motion.span>
      <motion.span variants={textSlideInUpVariants}>
        {letterAnimation("GET TO KNOW ME", letterVariants)}
      </motion.span>
    </div>
  </div>
);
