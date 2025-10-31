const express = require('express');
const app = express();
//database connection==========
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('WELCOME TO HOME PAGE:');
});



//person route============
const personroute=require('./router/personroute')
app.use('/person',personroute);

//menuitem route============
const menuitemroute=require('./router/menuitemroute');
app.use('/menuitem',menuitemroute);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
