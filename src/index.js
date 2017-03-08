import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import rootSaga from './app/sagas';

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
