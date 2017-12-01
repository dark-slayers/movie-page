import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovie from '../jsx/SearchMovie.jsx';
import PageTitle from 'react-ui/lib/base/PageTitle.js';

ReactDOM.render(
  <PageTitle title="查询视频"/>, document.getElementById('page-title'));
ReactDOM.render(
  <SearchMovie />, document.getElementById('main-ui'));
