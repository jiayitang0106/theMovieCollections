import React from 'react';
const SingleMovie = (props) => (
  <div>
    <div>{props.oneMovie.title}</div>
    <div>
      release date: {props.oneMovie.release_date} &nbsp; &nbsp;
      popularity: {props.oneMovie.popularity} &nbsp; &nbsp;
      vote count: {props.oneMovie.vote_count} &nbsp; &nbsp;
      original language: {props.oneMovie.original_language} &nbsp; &nbsp;
      <button onClick={() => props.onClick()}>add to favorite list</button>
    </div>
    <img src={`https://image.tmdb.org/t/p/w300/${props.oneMovie.poster_path}`} />
    <br />
    <div>{props.oneMovie.overview}</div>
    <br />
  </div>
);
export default SingleMovie;