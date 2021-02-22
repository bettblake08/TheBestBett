import React from "react";
import { motion } from "framer-motion";

import KE from "assets/images/ke.svg";
import CN from "assets/images/china.svg";
import BW from "assets/images/botswana.svg";
import "./background.scss";

const BackgroundFlags = ({ style }) => (
  <div className="p-background__flags" style={style}>
    <motion.div className="p-background__flag flag--kenya">
      <img src={KE} alt="Kenya Flag" />
    </motion.div>
    <motion.div className="p-background__flag flag--china">
      <img src={CN} alt="China Flag" />
    </motion.div>
    <motion.div className="p-background__flag flag--botswana">
      <img src={BW} alt="Botswana Flag" />
    </motion.div>
  </div>
);

const Background = () => (
  <div className="p-background">
    <BackgroundFlags />
    <BackgroundFlags style={{ marginTop: "-20rem" }}/>
  </div>
);
export default Background;
