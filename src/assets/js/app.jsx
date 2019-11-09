import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import PostList from './containers/Index';


const reactForm = document.getElementById('react-form');
const reactIndex = document.getElementById('react-index');

  

if (reactForm) {
  ReactDOM.render(<Form />, reactForm);
}

if (reactIndex) {
  ReactDOM.render(<PostList />, reactIndex);
}

