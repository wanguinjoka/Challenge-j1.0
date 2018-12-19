

const express = require('express');
const app = express();

//import logger module
const logger= require('./logger');


app.use(express.json());

const customers = [
  {id:1, name: 'rachel'},
  {id:2, name: 'james'},
  {id:3, name: 'carol'},

]

//home route displaying Welcome message
app.get('/', function (req, res) {
  res.send('Welcome to kudobuzz challenge');
});


// route to display lists of customers
app.get('/test/customers', function (req, res){
  res.send(customers);
});

// setting dynamic port to use for deployment
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));