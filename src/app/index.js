import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppContext from "./context";
import PageSelector from "../components/pageSelector";
import LandingPage from "../views/landingPage";
import ProfilePage from "../views/profilePage";
import WorkPage from "../views/workPage";
import ContactPage from "../views/contactPage";

const storeDefault = {
  header: {
    isLogoHidden: false
  },
  pageSelector: {
    isVisible: window.clientWidth < 800
  }
};

const Pages = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <PageSelector />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default () => {
  const [store, setStore] = useState(storeDefault);

  return (
    <div className={`page ${ store.pageSelector.isVisible ? 'page--selector-visible' : ''}`}>
      <Router>
        <AppContext.Provider
          value={{
            ...store,
            toggleLogoVisibility: (state = '') => {
              let updatedStore = { ...store };

              switch (state) {
                case "show": updatedStore.header.isLogoHidden = false; break;
                case "hide": updatedStore.header.isLogoHidden = true; break;
                default: updatedStore.header.isLogoHidden = !store.header.isLogoHidden;
              }
              
              setStore(updatedStore);
            },
            togglePageSelector: () => {
              let updatedStore = { ...store };
              updatedStore.pageSelector.isVisible = !store.pageSelector.isVisible;
              updatedStore.header.isLogoHidden = false;
              setStore(updatedStore);
            }
          }}
        >
          <Pages />
        </AppContext.Provider>
      </Router>
    </div>
  );
};
