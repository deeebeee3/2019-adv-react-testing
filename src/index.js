import React from 'react';
import ReactDOM from 'react-dom';

//communicates directly with every connect function
//we create inside our app - they work together to give our components
//direct access to the redux store
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//combine reducers call
import reducers from 'reducers';

import App from 'components/App';

ReactDOM.render(
  //reducers and some initial state (an empty object)
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.querySelector('#root')
);