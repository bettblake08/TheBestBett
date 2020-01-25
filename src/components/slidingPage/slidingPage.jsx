import React from "react";
import { motion } from "framer-motion";
import mainSliderConfig from "../../utilities/mainPageSlider";
import { useLocation, useHistory } from "react-router-dom";

const pages = ["/", "/profile", "/work"];

const SlidingPage = props => {
  const { children, className } = props;
  const location = useLocation();
  const history = useHistory();

  return (
    <motion.div
      {...mainSliderConfig}
      className={className}
      onPan={(event, info) => {
        if (info.delta.y > 10) {
          const pageIndex = pages.findIndex(page => page === location.pathname);
          if ((pageIndex + 1) !== pages.length) history.push(pages[pageIndex + 1]);
        } else if (info.delta.y < -10) {
          const pageIndex = pages.findIndex(page => page === location.pathname);
          if (pageIndex !== 0) history.push(pages[pageIndex - 1]);
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlidingPage;
