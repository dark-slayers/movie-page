import React from 'react'
import PropTypes from 'prop-types'
import Button from './ui/button/Button.jsx';
class DownloadButton extends Button {
  handleClick = () => {
    alert('Download !');
  }
}
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
        <div><DownloadButton/></div>
      </div>
    );
  }
}

export default MovieLabel;
