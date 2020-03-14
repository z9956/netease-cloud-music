import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import React, { lazy } from "react";

import Home from "@/pages/Home";

const App = () => {
  return (
      <HashRouter>
        <Switch>
          <Route path={ '/Home' } component={ Home }></Route>
          <Route path={ '/' }  exact component={ Home }></Route>
          <Redirect to={ '/' }/>
        </Switch>
      </HashRouter>
  )
}


export default App;