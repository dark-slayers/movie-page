import React from 'react'
import PropTypes from 'prop-types'

class DirButton extends React.Component {
  handleClick=()=>{
    alert(this.props.url);
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
