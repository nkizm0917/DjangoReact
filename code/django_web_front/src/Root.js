import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Top from "./page/Top";
import Sample from "./page/sample";
import Sample2 from "./page/sample2";
import App from './App';
import App2 from "./page/app2";
import Geinin from "./page/geinin";
import Geinin_res from "./page/geinin_res";

import history from './history';

import NotFound from "./page/404";

const Root: React.FC = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/sample" component={Sample} />
        <Route exact path="/sample2" component={Sample2} />
        <Route exact path="/app" component={App} />
        <Route exact path="/app2" component={App2} />
        <Route exact path="/geinin" component={Geinin} />
        <Route exact path="/geinin/results" component={Geinin_res} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Root;
