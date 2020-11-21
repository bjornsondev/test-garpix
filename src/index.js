import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import store from './store/store';

import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <HashRouter> {/* HashRouter для gh-pages */}
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);






// "homepage": "http://bjornsondev.github.io/test-garpix"
// Путь для пакаге жсона
