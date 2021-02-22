import { useState, useEffect } from "react";
import mainSliderConfig from "utils/mainPageSlider";
import SlidingPage from "components/slidingPage";
import LandingSection from "./landingSection";
import BasicInfoSection from "./basicInfoSection";
import EducationSection from "./educationSection";
import SkillsSection from "./skillsSection";
import Background from "./background";

import "./profilePage.scss";
import { setPageTitle } from "utils/helpers";

export default () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = e => {
    if (!e.target.classList.contains("page__view")) return;

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

  useEffect(() => {
    setPageTitle("Profile");
  }, []);

  return (
    <SlidingPage
      {...mainSliderConfig}
      className="profile-page"
      onScroll={onScroll}
    >
      <Background scrollY={scrollY}/>
      <div className="profile-page__content">
        <LandingSection scrollY={scrollY} />
        <BasicInfoSection scrollY={scrollY} />
        <EducationSection scrollY={scrollY} />
        <SkillsSection scrollY={scrollY} />
      </div>
    </SlidingPage>
  );
};
