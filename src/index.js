import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/features/App/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>, 
  document.getElementById('root')
);

serviceWorker.unregister();
