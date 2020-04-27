import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';

const RouterPage = lazy(() => import('@/pages/RouterPage'));

const App = () => (
    <Suspense fallback={ 'loading...' }>
      <HashRouter>
        <Switch>
          <Route component={ RouterPage }/>
        </Switch>
      </HashRouter>
    </Suspense>

);


export default App;
