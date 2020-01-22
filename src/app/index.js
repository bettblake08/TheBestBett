import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "../components/landingPage";

import './App.scss';

function App() {
  return (
    <div className="page">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
