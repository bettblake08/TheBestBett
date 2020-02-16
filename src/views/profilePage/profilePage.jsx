import React, { useState } from "react";
import mainSliderConfig from "../../utilities/mainPageSlider";
import SlidingPage from "../../components/slidingPage/slidingPage";
import LandingSection from "./landingSection";
import BasicInfoSection from "./basicInfoSection";
import EducationSection from "./educationSection";
import Background from "./background";

import "./profilePage.scss";

export default () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = e => {
    const offsetTop = e.target.scrollTop;
    setScrollY(e.target.scrollTop);
    let layers = document.querySelectorAll("[data-type='parallax']");
    let translate3d = "";

    layers.forEach(layer => {
      let depth = layer.getAttribute("data-depth");
      let movement = -(offsetTop * depth);
      translate3d = "translate3d(0, " + movement + "px, 0)";
      layer.style["-webkit-transform"] = translate3d;
      layer.style["-moz-transform"] = translate3d;
      layer.style["-ms-transform"] = translate3d;
      layer.style["-o-transform"] = translate3d;
      layer.style.transform = translate3d;
    });
  };

  return (
    <SlidingPage
      {...mainSliderConfig}
      className="profile-page"
      onScroll={onScroll}
    >
      <Background scrollY={scrollY} />
      <LandingSection scrollY={scrollY} />
      <BasicInfoSection scrollY={scrollY} />
      <EducationSection scrollY={scrollY} />
    </SlidingPage>
  );
};
