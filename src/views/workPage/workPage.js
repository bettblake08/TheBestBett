import React, { Component } from "react";
import WorkCollection from "./collection";
import WorkPageContext from "./workPageContext";
import SlidingPage from "../../components/slidingPage/slidingPage";
import projects from "./projects";

import "./workPage.scss";

class WorkPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: {
        projects,
        selectedWork: { ...projects[0], group: "Projects" },
        setSelectedWork: this.setSelectedWork
      },
      isGalleryExpanded: false
    };
  }

  handleBackBtnClick = () =>
    this.setState(state => ({ isGalleryExpanded: !state.isGalleryExpanded }));

  setSelectedWork = selectedWork =>
    this.setState(state => ({
      store: { ...state.store, selectedWork },
      // isGalleryExpanded: false
    }));

  renderPreview = item => (
    <div className="work-preview">
      <div className="work-preview__image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="work-preview__fade"></div>
      <div className="work-preview__details">
        <div className="work-preview__title">{item.title}</div>
        <div className="work-preview__body">{item.description}</div>
      </div>
    </div>
  );

  render() {
    const { isGalleryExpanded, store } = this.state;

    return (
      <SlidingPage className={`work-page${isGalleryExpanded ? "--expand" : ""}`}>
        <WorkPageContext.Provider value={store}>
          <div className="work-page__preview">
            <div
              className={`work-page__back-btn fas fa-arrow-${
                isGalleryExpanded ? "right" : "left"
              } fa-2x`}
              onClick={this.handleBackBtnClick}
            ></div>
            {this.renderPreview(store.selectedWork)}
          </div>
          <div className="work-page__gallery">
            <div className="work-page__gallery__view">
              <WorkCollection title="Projects" list={store.projects} />
              <WorkCollection title="Projects" list={store.projects} />
            </div>
          </div>
        </WorkPageContext.Provider>
      </SlidingPage>
    );
  }
}

export default WorkPage;
