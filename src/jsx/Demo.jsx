import React from 'react';
import BaseForm from './base/BaseForm.jsx';
import DownloadDiv from './download/DownloadDiv.jsx';
import AjaxUtil from '../js/AjaxUtil.js';
import URL from '../js/URL.js';
class F extends BaseForm {
  handleClick = () => {
    const call = this.props.call;
    AjaxUtil.get(URL.downloadVO(this.state.path), function(data) {
      call(data);
    });
  }
}
class Demo extends React.Component {
  state = {
    vo: {
      "path": "",
      "dirList": [],
      "fileList": []
    }
  }
  handleCall = (data) => {
    const newState = {
      vo: data
    };
    this.setState(newState);
  }
  render() {
    const template = {
      path: '路径'
    };
    return (<div>
      <F template={template} call={this.handleCall}/>
      <DownloadDiv vo={this.state.vo} call={this.handleCall}/>
    </div>);
  }
}

export default Demo;
