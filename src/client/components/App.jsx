import React from 'react';
import axios from 'axios';
import MovieEntry from './MovieEntry.jsx';
import SingleMovie from './SingleMovie.jsx';
import FavMovieList from './FavMovieList.jsx';
import FavMovie from './FavMovie.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      favList: [],
      handleFav: false,
      handleList: false,
    };
  }

  componentDidMount() {
    this.handleList();
  }

  handleList() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b76c759a0c691ebbedc71d570e2708bd&language=en-US&page=1`)
    .then(res => {
      console.log(res.data.results);
      const movieList = res.data.results;
      this.setState({
        movieList,
        handleList: true,
        handleFav: false,
      });
    })
    .catch(err => console.log(err))
  }

  handleFav(){
    axios.get(`http://localhost:3000/api/favMovie`)
      .then(res => {
        console.log(res.data);
        const favList = res.data;
        this.setState({
          favList,
          handleFav: true,
          handleList: false,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  renderView() {
    if (this.state.handleFav === true) {
      return (
        <div>
          <FavMovieList FavMovie={this.state.favList} />
        </div>
       )} else if (this.state.handleList === true) {
      return (
        <div>
        <h1>Movie List</h1>
         <MovieEntry movie={this.state.movieList} onClick={this.handleClick}/>
       </div>
      )}
  }

  handleClick(data) {
    console.log(data);
    axios.post(`http://localhost:3000/api/favMovie`, {data: data})
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="nav">
        <span><button onClick={() => this.handleFav()}>favorite movies</button></span>
        <span><button onClick={() => this.handleList()}>movie list</button> </span>

        <div>{this.renderView()}</div>

      </div>
    );

  }
}
export default App;