import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './static/css/common.scss';
import './static/font/iconfont.css';
import App from '@/pages/App';

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
serviceWorker.unregister();
