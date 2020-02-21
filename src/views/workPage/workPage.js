import React, { useState, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import WorkCollection from "./collection";
import WorkPageContext from "./workPageContext";
import SlidingPage from "../../components/slidingPage/slidingPage";
import profile from "../../me";
import HeaderContext from "../../app/context";
import GlobalVariants from "../../utilities/globalVariants";

import "./workPage.scss";

const variants = {
  "page-initial": GlobalVariants.slideInFromLeft.initial,
  "page-in": GlobalVariants.slideInFromLeft.enter,
  "page-out": GlobalVariants.slideInFromLeft.exit,
  "preview-start": GlobalVariants.slideInFromLeft.enter,
  "preview-end": GlobalVariants.slideInFromLeft.exit
};

const WorkPreview = ({ work, controls }) => (
  <div className="work-preview">
    <div className="work-preview__image">
      <img src={work.image} alt={work.title} />
    </div>
    <div className="work-preview__fade"></div>
    <div className="work-preview__details">
      <motion.div
        className="work-preview__title font--subtitle"
        variants={variants}
        animate={controls}
      >
        {work.title}
      </motion.div>
      <motion.div
        className="work-preview__body font--normal"
        variants={variants}
        animate={controls}
      >
        {work.description}
      </motion.div>
    </div>
  </div>
);

export default () => {
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [store, setStore] = useState({
    projects: profile.projects,
    selectedWork: { ...profile.projects[0], group: "Projects" }
  });

  const headerContext = useContext(HeaderContext);

  const setSelectedWork = async selectedWork => {
    await controls.start('preview-end');
    setStore({ ...store, selectedWork });

    if (isGalleryExpanded) {
      setIsGalleryExpanded(!isGalleryExpanded);
      headerContext.toggleLogoVisibility();
    }
    await controls.start('preview-start')
  };

  return (
    <SlidingPage className={`work-page${isGalleryExpanded ? "--expand" : ""}`}>
      <WorkPageContext.Provider value={{ ...store, setSelectedWork }}>
        <div className="work-page__preview">
          <div
            className={`work-page__back-btn fas fa-arrow-${
              isGalleryExpanded ? "right" : "left"
            } fa-2x`}
            onClick={() => {
              setIsGalleryExpanded(!isGalleryExpanded);
              headerContext.toggleLogoVisibility();
            }}
          ></div>
          <WorkPreview work={store.selectedWork} controls={controls}/>
        </div>
        <div
          className="work-page__gallery"
          onScroll={e => setScrollY(e.target.scrollTop)}
        >
          {scrollY > 10 ? (
            <div className="work-page__gallery__fade"></div>
          ) : null}
          <div className="work-page__gallery__view">
            <WorkCollection title="Projects" list={store.projects} />
          </div>
        </div>
      </WorkPageContext.Provider>
    </SlidingPage>
  );
};
