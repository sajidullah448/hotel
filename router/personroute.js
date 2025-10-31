const express=require('express');
const route=express.Router();
const person=require('./../module/person')

route.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log('Internal server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

route.get('/',async(req,res)=>{
    try{
const show=await person.find();
    console.log('data showed');
    res.status(200).json(show);
    }
catch(err){
 console.log('Internal server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

route.get('/:worktype',async(req,res)=>{
 try{
 const worktype=req.params.worktype;
  if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
    const responce=await person.find({work:worktype});
    console.log('data showed successfully');
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
});

route.put('/:id',async(req,res)=>{
    try{
const personid=req.params.id;
    const personupdate=req.body;
    const responce=await person.findByIdAndUpdate(personid,personupdate,{
        new:true,
        runValidators:true
    })
    if(!responce){
        return res.status(404).json({error:'person not found'})
    }
    console.log('data updated');
    res.status(200).json(responce)
    }
    catch(err){
console.log('Internal server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.delete('/:id',async(req,res)=>{
    try{
const personid=req.params.id;
    const responce=await person.findByIdAndDelete(personid);
    if(!responce){
      return res.status(404).json({error:'person not found'})  
    }
    console.log('data deleted successfully');
    res.status(200).json({message:'data delete successfully'})
    }
    catch(err){
console.log('Internal server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports=route;