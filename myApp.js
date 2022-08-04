let express = require('express');
let app = express();

app.get('/', (req, res) => {
  path = __dirname + '/views/index.html';
  
  res.sendFile(path)
})
app.use('/public', express.static(__dirname + '/public'))

app.use('/json', (req, res) => {
  res.json({'message': 'Hello json'})
})


























 module.exports = app;
