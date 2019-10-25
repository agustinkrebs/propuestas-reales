import React from 'react';
import ReactDOM from 'react-dom';
import Session from './components/Session';


const reactAppContainer = document.getElementById('react-app');


if (reactAppContainer) {
  ReactDOM.render(<Session />, reactAppContainer);
}


