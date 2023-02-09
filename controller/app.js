const jwt=require('jsonwebtoken')
// const CustomAPIError =require('../error/custom-error')
const {BadRequestError}=require('../error')

const login =async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        throw new BadRequestError('please provide email and password')
    }
    //just for demo normally provided by DB
    const id = new Date().getDate()
     //here id,username is payload,JWT_SECRET is secret and expiresIn is option
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'}) 
    res.status(200).json({msg:'user created',token})
}

const dashboard=async(req,res)=>{
  const ranNumber = Math.floor(Math.random()*100)
   res.status(200).json({msg:`Hello ${req.user.username}`,secret:`your number is ${ranNumber}`})
}

module.exports={login,dashboard}