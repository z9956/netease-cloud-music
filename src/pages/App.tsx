import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';

const RouterPage = lazy(() => import('@/pages/RouterPage'));

const App = () => (
    <Suspense fallback={ 'loading...' }>
      <BrowserRouter>
        <Switch>
          <Route component={ RouterPage }/>
        </Switch>
      </BrowserRouter>
    </Suspense>

);


export default App;
