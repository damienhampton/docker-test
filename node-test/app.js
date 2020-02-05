const express = require('express');
const app = express();

app.get('/', (_, res) => {
  console.log(`${(new Date()).toISOString()} /`)
  res.json({ msg: 'Hello ECS!'})
});

app.server = app.listen(3000);

module.exports = app;