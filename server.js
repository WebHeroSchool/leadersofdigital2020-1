const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const parseData = require('./server/parseData');
app.use(express.static('dist'));

app.get('/position/:id', (req, res) => {
  parseData.then((result => res.json(result))).catch(res.json);
});

app.listen(3000);
