import {
  HashRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import React, { lazy } from 'react';

import Home from '@/pages/Home';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);


export default App;
