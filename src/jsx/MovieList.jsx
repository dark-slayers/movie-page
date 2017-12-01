import React from 'react'
import PropTypes from 'prop-types'
import MovieLabel from './MovieLabel.jsx';
class MovieList extends React.Component {
  render() {
    return (
      <div>
        <div>视频列表</div>
        <div><MovieLabel/></div>
      </div>
    );
  }
}

export default MovieList;
