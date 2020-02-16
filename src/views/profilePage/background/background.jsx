import React from "react";
import { motion } from "framer-motion";
import KE from "../../../assets/images/ke.svg";
import "./background.scss";

const Background = ({ scrollY }) => (
  <div className="p-background" data-type="parallax" data-depth="2">
    <motion.div className="p-background__flag-left">
      <img src={KE} alt="Kenya Flag" />
    </motion.div>
  </div>
);
export default Background;
