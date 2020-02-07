const express = require('express')
const app = express()
const port = 3000;
const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());

app.get('/houses', (req, res) => {
  axios.get('http://localhost:3004/houses')
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
});

app.get('/seed', (req, res) => {
  axios.get('http://localhost:3003/seed')
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
});

app.get('/listings', (req, res) => {
  axios.get('http://localhost:3001/listings')
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
});

app.get('/api/summary/data/:id', (req, res) => {
  const id = req.params.id;
  axios.get(`http://localhost:3002/api/summary/data/${id}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))