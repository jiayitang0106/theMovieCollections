import React from 'react';
import FavMovie from './FavMovie.jsx';
const FavMovieList = (props) => (
  <div>
    {props.FavMovie.map((movie) => <FavMovie key={movie.id} movie={movie}/>)}
  </div>
)
export default FavMovieList;