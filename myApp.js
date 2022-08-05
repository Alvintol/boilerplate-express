const dotenv = require('dotenv').config();
let express = require('express');
let app = express();

app.get('/', (req, res) => {
  path = __dirname + '/views/index.html';

  res.sendFile(path)
})
app.use('/public', express.static(__dirname + '/public'))

app.use('*', (req, res, next) => {
  express.static('root',
    console.log(`${req.method} ${req.path} - ${req.ip}`));
  next();
})

app.get('/json', (req, res) =>
  process.env.MESSAGE_STYLE === 'uppercase' ?
    res.json({ 'message': 'HELLO JSON' }) :
    res.json({ 'message': 'Hello json' })
);

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
},(req, res) => {
  res.send({time: req.time})
});
























module.exports = app;
