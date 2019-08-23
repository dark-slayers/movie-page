import React from 'react';
import EmptyForm from 'react-ui/lib/form/EmptyForm.js';
import TextInput from './base/TextInput.jsx';
import AjaxUtil from '../js/AjaxUtil.js';
import URL from '../js/URL.js';
class DownLoad extends EmptyForm {
  state = {
    path: '',
  };
  handleClick = () => {
    const url = URL.download(this.state.path);
    console.log("url : " + url);
    window.open(url);
  }
  render() {
    const pageStyle = {
      display: 'flex',
      justifyContent: 'center'
    };
    return (
      <div style={pageStyle}>
        <div>
          <TextInput obj={this} name="path" label="文件路径：" />
          <div style={pageStyle}>
            <button onClick={this.handleClick}>下载</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DownLoad;
