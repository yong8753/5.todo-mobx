import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'mobx-react';
import TodoStore from './store/TodoStore'

ReactDOM.render(
  <Provider todoStore={TodoStore}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
      document.getElementById('root')
);

reportWebVitals();
