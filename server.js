const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index');

app.use(express.json());
app.use(routes);

app.listen(PORT, (err) => {
  if (err) {
    return console.log('ERROR', err);
  }
  return console.log(`Server running on port ${PORT}`);
});
