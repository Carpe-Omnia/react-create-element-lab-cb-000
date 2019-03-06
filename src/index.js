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
const meIntReact =
  React.createElement('div', {class: "me"}, list)

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
