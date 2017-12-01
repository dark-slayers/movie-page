import React from 'react'
import PropTypes from 'prop-types'

class MovieLabel extends React.Component {
  render() {
    const DEFAULT_MOVIE = {
      code: 'YOVS008'
    };
    const movie = this.props.movie
      ? this.props.movie
      : DEFAULT_MOVIE;
    const imgSrc='/pic/'+movie.code;
    return (
      <div>
        <div>{movie.code}</div>
        <div>
          <img alt="image" src={imgSrc}/>
        </div>
      </div>
    );
  }
}

export default MovieLabel;
