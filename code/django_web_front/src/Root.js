import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Top from "./page/Top";
import Sample from "./page/sample";
import Sample2 from "./page/sample2";
import App from './App';
import App2 from "./page/app2";
import Geinin from "./page/geinin";
import Geinin_res from "./page/geinin_res";
import testApp from './page/testapp';
import Contents from './page/contents';
import Game from './xeno/index';


import history from './history';

import NotFound from "./page/404";

const Root: React.FC = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/top" component={Top} />
        <Route exact path="/sample" component={Sample} />
        <Route exact path="/sample2" component={Sample2} />
        <Route exact path="/app" component={testApp} />
        <Route exact path="/app2" component={App2} />
        <Route exact path="/geinin" component={Geinin} />
        <Route exact path="/geinin/results" component={Geinin_res} />
        <Route exact path="/contents" component={Contents} />
        <Route exact path="/xeno" component={Game} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Root;
