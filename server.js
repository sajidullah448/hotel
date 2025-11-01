const express = require('express');
const app = express();
//database connection==========
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const passport=require('./auth');


const loghost=(req,res,next)=>{
  console.log('you go to next function');
  next();
}
app.use(loghost);



app.use(passport.initialize());

const localauthmiddleware=passport.authenticate('local',{session:false})
app.get('/',localauthmiddleware,(req, res) => {
  res.send('WELCOME TO HOME PAGE:');
});



//person route============
const personroute=require('./router/personroute')
app.use('/person',localauthmiddleware,personroute);

//menuitem route============
const menuitemroute=require('./router/menuitemroute');
const person = require('./module/person');
app.use('/menuitem',menuitemroute);


const PORT=process.env.PORT ||4000
app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});
