import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.tsx';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App name="2asd" age={123} />, document.querySelector('#root'));
