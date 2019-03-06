import React from 'react';
import ReactDOM from 'react-dom';

const list =
  React.createElement('ul', {class: "my-interests"},
[
  React.createElement('li',{},'Javascript'),
  React.createElement('li',{},'React'),
  React.createElement('li',{},'Movies'),
  React.createElement('li',{},'Ice Cream')
])


ReactDOM.render(
  list,
  document.getElementById('global')
);

export default list
