import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import App from 'components/App';

//Root will recieve App Component on the props property of props.children
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);