import React from 'react'
import PropTypes from 'prop-types'
import MovieList from './MovieList.jsx';

class SearchMovie extends React.Component {
  render() {
    return (
      <div>
        <div>查询视频</div>
        <div><MovieList/></div>
      </div>
    );

  }
}

export default SearchMovie;
