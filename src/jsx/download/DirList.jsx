import React from 'react'
import PropTypes from 'prop-types'
import DirButton from './DirButton.jsx';

class DirList extends React.Component {
  render() {
    const divStyle = {
      borderStyle: 'solid',
      borderColor: '#ffff00',
      marginBottom: 8,
      display:'flex',
      padding:5
    };
    const path = this.props.path;
    const children = this.props.list.map((ele, index) => {
      return (<DirButton url={path + '\\' + ele} fileName={ele} key={index}/>);
    });

    return (<div style={divStyle}>{children}</div>);
  }
}

export default DirList;
