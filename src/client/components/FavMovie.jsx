import React from 'react';
const FavMovie = (props) => (
  <div>
    <br />
    Movie title: {props.movie.title} &nbsp; &nbsp; &nbsp;
    Release Date: {props.movie.releaseDate} &nbsp; &nbsp; &nbsp;
    Popularity: {props.movie.popularity} &nbsp; &nbsp; &nbsp;
  </div>
)
export default FavMovie;
