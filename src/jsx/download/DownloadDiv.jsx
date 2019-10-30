import React from 'react'
import PropTypes from 'prop-types'
import FileList from './FileList.jsx';
import DirList from './DirList.jsx';
class DownloadDiv extends React.Component {
  render () {
    return (<div>
      <DirList  path={this.props.vo.path} list={this.props.vo.dirList} call={this.props.call}/>
      <FileList path={this.props.vo.path} list={this.props.vo.fileList}/>
    </div>);

  }
}

export default DownloadDiv;
