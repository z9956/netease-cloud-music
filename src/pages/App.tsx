import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import React, { lazy } from "react";

import Home from "@/pages/index";

const App = () => {
  return (
      <HashRouter>
        <Switch>
          <Route path={ '/home' } component={ Home }></Route>
          <Route path={ '/' } component={ Home }></Route>
          <Redirect to={ '/' }/>
        </Switch>
      </HashRouter>
  )
}


export default App;