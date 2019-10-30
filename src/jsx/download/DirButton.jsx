import React from 'react'
import PropTypes from 'prop-types'
import AjaxUtil from '../../js/AjaxUtil.js';
import URL from '../../js/URL.js';
class DirButton extends React.Component {
  handleClick=()=>{
    const call = this.props.call;
    AjaxUtil.get(URL.downloadVO(this.props.url), function(data) {
      call(data);
    });
  }
  render () {
    const divStyle = {
      borderStyle: 'solid',
      borderColor: '#00ffff',
      margin: 3,
      padding: 5,
      display:'flex',
      marginRight:20,
      cursor: 'pointer'
    };
    return (<div style={divStyle} onClick={this.handleClick}>{this.props.fileName}</div>);
  }
}

export default DirButton;
