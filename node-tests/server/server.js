const express = require('express');

var app = express();
// var port = 3004;
//
app.get('/', (req, res) => {
  res.status(404).send({
    error: 'PAGE NOT FOUND',
    name: 'TodoApp v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send({
    gabi: {
      name: 'Gabi',
      age: 22
    },
    matei: {
      name: 'Matei',
      age: 21
    },
    ianu: {
      name: 'Ianu',
      age: 20
    }
  });
});

app.listen(3000);
//
// app.listen(port, () => {
//   console.log(`Listening to port ${port}`);
// });

module.exports.app = app;
