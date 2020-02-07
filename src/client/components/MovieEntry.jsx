import React from 'react';
import SingleMovie from './SingleMovie.jsx';
const MovieEntry = (props) => (
  <div className='movieEntry'>
    {props.movie.map((oneMovie) => <SingleMovie key={oneMovie.id} oneMovie={oneMovie} onClick={() => props.onClick(oneMovie)}/>)}
  </div>
);

export default MovieEntry;