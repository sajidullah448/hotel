const express=require('express');
const route=express.Router();
const menuitem=require('./../module/menuitem');

route.post('/',async(req,res)=>{
 try{
const data=req.body;
 const newitem=new menuitem(data);
 const responce=await newitem.save();
 console.log('data saved successfully');
 res.status(200).json(responce);
 }
 catch(err){
console.log('Internal server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
 }
});

route.get('/',async(req,res)=>{
  try{
const show=await menuitem.find();
  console.log('data showed');
    res.status(200).json(show);
  }catch(err){
console.log('Internal server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

route.get('/:foodtype',async(req,res)=>{
    try{
 const foodtype=req.params.foodtype;
 if(foodtype=='sweet'|| foodtype=='spicy'|| foodtype=='sour'){
    const responce=await menuitem.find({taste:foodtype});
    console.log('data fatched successfully');
    res.status(200).json(responce);
 }
 else{
    res.status(500).json('invalid user input')
 }
    }
    catch(err){
console.log('Internal server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
    }

})

module.exports=route