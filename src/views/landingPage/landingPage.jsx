import React from 'react';
import mainSliderConfig from "../../utilities/mainPageSlider";
import SlidingPage from "../../components/slidingPage/slidingPage";
import "./landingPage.scss";

export default () => (
  <SlidingPage {...mainSliderConfig} >
    <div className="landing-page__info">
      <div className="info__intro">
        <h3>Hi, I'm</h3>
        <h1>Brian Kipkirui Bett</h1>
      </div>

      <div className="info__job">
        <p>I'm a </p>
        <span>Software Engineer</span>
      </div>
    </div>
  </SlidingPage>
);
