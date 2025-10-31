const mongoose =require('mongoose');
const mongourl='mongodb://localhost:27017/hotel';
mongoose.connect(mongourl,{

});
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongodb server');
});
db.on('error',()=>{
    console.log('mongodb create some error');
});
db.on('disconnected',()=>{
    console.log('disconnected to mongodb server');
});

module.exports=db;