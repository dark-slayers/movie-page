import React from 'react';
import ReactDOM from 'react-dom';
import Demo from '../jsx/Demo.jsx';
import PageTitle from 'react-ui/lib/base/PageTitle.js';

ReactDOM.render(<PageTitle title="DEMO"/>, document.getElementById('page-title'));
ReactDOM.render(<Demo/>, document.getElementById('main-ui'));
