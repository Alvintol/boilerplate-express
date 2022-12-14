const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  path = __dirname + '/views/index.html';

  res.sendFile(path)
})

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
}, (req, res) => {
  res.send({ time: req.time })
});

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.send({ echo: word })
});

app.get('/name', (req, res) => {
  const { first, last } = req.query;
  res.send({ name: `${first} ${last}` })
});

app.post('/name', (req, res) => {
  const { first, last } = req.body;
  res.send({ name: `${first} ${last}` })
})




















module.exports = app;
