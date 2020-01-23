import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";
import LandingPage from "../components/landingPage";
import PageSelector from "../components/pageSelector";

import './App.scss';

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <PageSelector />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/profile" component={LandingPage} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
