import React, { useState, useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import AppContext from "app/context";
import Button from "components/button";
import SlidingPage from "components/slidingPage";
import GlobalVariants from "utils/globalVariants";
import { isScreenMobile, setPageTitle } from "utils/helpers";
import profile from "me";

import WorkCollection from "./collection";
import WorkPageContext from "./workPageContext";

import "./workPage.scss";

const variants = {
  "page-initial": GlobalVariants.slideInFromLeft.initial,
  "page-in": GlobalVariants.slideInFromLeft.enter,
  "page-out": GlobalVariants.slideInFromLeft.exit,
  "preview-start": GlobalVariants.slideInFromLeft.enter,
  "preview-end": GlobalVariants.slideInFromLeft.exit
};

const WorkPreview = ({ work, controls }) => {
  const [components, setComponents] = useState({});

  return (
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
        <motion.div
          className="work-preview__button"
          animate={controls}
          variants={variants}
        >
          <Button
            defaultStatus={0}
            parent={{ components, setComponents }}
            name="contactButton"
            config={{
              icon: "arrow-right",
              label: "Check it out",
              action: () => window.open(work.url, "_blank"),
              reverse: true
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const WorkPage = () => {
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(!isScreenMobile());
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [store, setStore] = useState({
    projects: profile.projects,
    selectedWork: { ...profile.projects[0], group: "Projects" }
  });

  const appContext = useContext(AppContext);

  const setSelectedWork = async selectedWork => {
    await controls.start("preview-end");
    setStore({ ...store, selectedWork });
    setIsGalleryExpanded(true);
    await controls.start("preview-start");
  };

  useEffect(() => {
    appContext.toggleLogoVisibility(isGalleryExpanded ? "show" : "hide");
    setPageTitle("Work");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGalleryExpanded]);

  return (
    <SlidingPage
      className={`work-page${!isGalleryExpanded ? "--collapsed" : ""}`}
    >
      <WorkPageContext.Provider value={{ ...store, setSelectedWork }}>
        <div className="work-page__preview">
          <div
            className={`work-page__back-btn fas fa-arrow-${
              !isGalleryExpanded ? "right" : "left"
            } fa-2x`}
            onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
          ></div>
          <WorkPreview work={store.selectedWork} controls={controls} />
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

export default WorkPage;
