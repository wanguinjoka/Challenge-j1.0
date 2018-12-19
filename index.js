

const express = require('express');
const app = express();
const pino = require('express-pino-logger')();

app.use(express.json());
app.use(pino);

const customers = [
  {id:1, name: 'rachel'},
  {id:2, name: 'james'},
  {id:3, name: 'carol'},

]
app.get('/', function (req, res) {
  req.log.info('something else')
  res.send('Hello World');
});

app.get('/test/customers', function (req, res){
  res.send(customers);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));