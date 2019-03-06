import React from 'react';
import ReactDOM from 'react-dom';

const meInReact =
  React.createElement('ul', {class: "my-interests"},
[
  React.createElement('li',{},'Javascript'),
  React.createElement('li',{},'React'),
  React.createElement('li',{},'Movies'),
  React.createElement('li',{},'Ice Cream')
])


ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
