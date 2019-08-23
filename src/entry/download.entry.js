import React from 'react';
import ReactDOM from 'react-dom';
import DownLoad from '../jsx/DownLoad.jsx';
import PageTitle from 'react-ui/lib/base/PageTitle.js';

ReactDOM.render(
  <PageTitle title="下载文件" />, document.getElementById('page-title'));
ReactDOM.render(
  <DownLoad />, document.getElementById('main-ui'));
