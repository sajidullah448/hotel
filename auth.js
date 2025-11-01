const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const person=require('./module/person');

passport.use(new LocalStrategy(async(username,password,done)=>{
  try{
    // console.log("Reduce credential",username,password);
const user =await person.findOne({username:username});
if(!user)
  return done(null,false,{message:'invalid username'});

const matchpassword=user.password===password?true:false;
if(matchpassword){
  return done(null,user);
}
else{
  return done(null,false,{message:"invalid password"})
}
  }
  catch(err){
return done(err);
  }
}));

module.exports=passport;