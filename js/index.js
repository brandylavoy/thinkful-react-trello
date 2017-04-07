require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';
//import Forms from './components/form';
//import List from './components/list';
//import Card from './components/card';

document.addEventListener('DOMContentLoaded',()=> ReactDOM.render(<Board/>, document.getElementById('app'))
);
