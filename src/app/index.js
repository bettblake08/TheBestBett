import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";
import LandingPage from "../views/landingPage";
import ProfilePage from "../views/profilePage";
import WorkPage from "../views/workPage";
import ContactPage from "../views/contactPage";

import PageSelector from "../components/pageSelector";

import './App.scss';

const Pages = () => {
  const location  = useLocation();
  
  return (
    <React.Fragment>
      <Header />
      <PageSelector />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </AnimatePresence>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="page">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
