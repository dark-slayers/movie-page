import React from 'react'
import PropTypes from 'prop-types'
import URL from '../../js/URL.js'
class FileButton extends React.Component {
  render () {
    const divStyle = {
      borderStyle: 'solid',
      borderColor: '#ff00ff',
      margin: 3,
      padding: 5,
      display:'flex',
      marginRight:20
    };
    const p=URL.download(this.props.url);
    return (<div style={divStyle}><a href={p}>{this.props.fileName}</a></div>);
  }
}

export default FileButton;
