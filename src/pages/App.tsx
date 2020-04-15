import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
