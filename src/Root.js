import React from 'react';

//communicates directly with every connect function
//we create inside our app - they work together to give our components
//direct access to the redux store
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//combine reducers call
import reducers from 'reducers';

//export functional react component
export default (props) => {
  return (
    //reducers and some initial state (an empty object)
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  );
}