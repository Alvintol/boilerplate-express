const dotenv = require('dotenv').config();
let express = require('express');
let app = express();

app.get('/', (req, res) => {
  path = __dirname + '/views/index.html';
  
  res.sendFile(path)
})
app.use('/public', express.static(__dirname + '/public'))

app.get('/json', (req, res) => 
  process.env.MESSAGE_STYLE === 'uppercase' ?
  res.json({'message': 'HELLO JSON'}):
  res.json({'message': 'Hello json'})
)


























 module.exports = app;
