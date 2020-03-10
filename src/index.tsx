import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Demo from "@/pages/index";

ReactDOM.render(
    <Demo/>,
    document.getElementById('root')
);
serviceWorker.unregister();