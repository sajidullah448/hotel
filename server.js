const express = require('express');
const app = express();
//database connection==========
const db = require('./db');
require('dotenv').config();

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


const PORT=process.env.PORT ||4000
app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});
