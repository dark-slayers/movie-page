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
    level: 3,
    path: ''
  };
  handleClick = () => {
    AjaxUtil.post(URL.movie, this.state, function(data) {
      alert(JSON.stringify(data));
    });
  }
  createCode = () => {
    if(this.state.path){
      let index1=this.state.path.lastIndexOf("\\");
      let index2=this.state.path.lastIndexOf("/");
      let index=Math.max(index1,index2)+1;
      let pointIndex=this.state.path.lastIndexOf(".");
      let code=this.state.path.substring(index,pointIndex).toUpperCase();
      const newState={code:code};
      this.setState(newState);
    }
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
            <button onClick={this.createCode}>生成CODE</button>
            <button onClick={this.handleClick}>添加</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMovie;
