const mongoose = require('mongoose');
const db = require('./favMovie.js');

mongoose.Promise = global.Promise;

const movieSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  title: String,
  releaseDate: String,
  popularity: Number
});

const MovieList = mongoose.model('MovieList', movieSchema);

const insert = (data) => {
  const entry = new MovieList({
    id: data.id,
    title: data.title,
    releaseDate: data.release_date,
    popularity: data.popularity
  });
  return entry.save(entry);
}

const fetch = () => {
  return new Promise((resolve, reject) => {
    MovieList
    .find()
    .exec((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  })
};


module.exports.insert = insert;
module.exports.MovieList = MovieList;
module.exports.fetch = fetch;

