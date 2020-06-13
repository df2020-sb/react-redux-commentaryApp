import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import comments from './reducers';


const initialState = [];
const store = createStore(comments, initialState);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
