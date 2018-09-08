// @flow

import React from 'react';
import { render } from 'react-dom';
import Pref from 'react-addons-perf';
import App from './App';

window.Perf = Pref;
Perf.start();

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
