import React from 'react';
import ReactDOM from 'react-dom';
import AddMovie from '../jsx/AddMovie.jsx';
import PageTitle from 'react-ui/lib/base/PageTitle.js';

ReactDOM.render(
  <PageTitle title="添加视频"/>, document.getElementById('page-title'));
ReactDOM.render(
  <AddMovie />, document.getElementById('main-ui'));
