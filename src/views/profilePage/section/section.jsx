import React, { useState } from "react";
import { useAnimation } from "framer-motion";
import { isSectionInView } from "../helper";

export default ({ scrollY, children, className }) => {
  const [previouslyInView, setPreviouslyInView] = useState(false);
  const [sectionRef] = useState(React.createRef());
  const controls = useAnimation();
  const inView = isSectionInView(sectionRef.current, scrollY);

  if (previouslyInView !== inView) {
    setPreviouslyInView(inView);
    controls.start(inView ? "section-in" : "section-out");
  }

  return (
    <div
      className={className}
      data-type="parallax"
      data-depth="1"
      ref={sectionRef}
    >
      {React.cloneElement(children, { controls, scrollY })}
    </div>
  );
};
