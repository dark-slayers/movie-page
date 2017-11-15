import React from 'react';
import EmptyForm from 'react-ui/lib/form/EmptyForm.js';
import TextInput from './base/TextInput.jsx';
import AjaxUtil from '../js/AjaxUtil.js';
import URL from '../js/URL.js';
class AddMovie extends EmptyForm {
  state = {
    actress: '',
    code: '',
    label: '',
    level: 2,
    path: ''
  };
  handleClick = () => {
    AjaxUtil.post(URL.movie, this.state, function(data) {
      alert(JSON.stringify(data));
    });
  }
  render() {
    const pageStyle = {
      display: 'flex',
      justifyContent: 'center'
    };
    return (
      <div style={pageStyle}>
        <div>
          <TextInput obj={this} name="actress" label="actress："/>
          <TextInput obj={this} name="code" label="code："/>
          <TextInput obj={this} name="label" label="label："/>
          <TextInput obj={this} name="level" label="level："/>
          <TextInput obj={this} name="path" label="视频文件路径："/>
          <div style={pageStyle}>
            <button onClick={this.handleClick}>添加</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMovie;
