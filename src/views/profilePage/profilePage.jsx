import React from 'react';
import mainSliderConfig from "../../utilities/mainPageSlider";
import SlidingPage from "../../components/slidingPage/slidingPage";

import "./profilePage.scss";

export default () => (
  <SlidingPage {...mainSliderConfig} className="profile-page">
    <div className="profile-page__intro">
      <div className="profile-page__intro__text">
        <span>HELLO</span>
        <span>EVERYONE</span>
        <span>GET TO KNOW ME</span>
      </div>
    </div>
  </SlidingPage>
);
