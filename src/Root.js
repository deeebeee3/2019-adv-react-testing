import React from 'react';

//communicates directly with every connect function
//we create inside our app - they work together to give our components
//direct access to the redux store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reduxPromise from 'redux-promise';

//combine reducers call
import reducers from 'reducers';

//export functional react component
//destructure children and initialState from props / give initialState a default value
export default ({ children, initialState = {} }) => {

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return (
    //reducers and some initial state (an empty object)
    <Provider store={store}>
      {children}
    </Provider>
  );
}