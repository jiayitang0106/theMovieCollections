const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const MovieList = require('../database/index.js');
const db = require('../database/favMovie.js');

const app = express();
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../../dist'));

const port = 3000;

app.post('/api/favMovie', (req, res) => {
  const data = req.body.data;
  MovieList.insert(data)
    .then(res.status(201).end())
    .catch(err => {
      console.log("duplicate happens");
      res.status(404).end();
    })
});

app.get('/api/favMovie', (req,res) => {
  MovieList.fetch()
    .then(entry =>
      res.status(200).send(entry)
    )
    .catch(err => {
      console.log(err);
      res.status(404).end();
})
});

app.listen(port, console.log(`Server running on port: ${port}`));