const jwt=require('jsonwebtoken')
// const CustomAPIError=require('../error/custom-error')
const {UnauthenticatedError}=require('../error')
const authenticationMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
          // throw new CustomAPIError('Not tooken provided',401)
        throw new UnauthenticatedError('No token provided') 
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)//we verify whether the token is correct or not,expired or not
        const {id,username}=decoded
        req.user={id,username}
        next()
    } catch (error) {
        // throw new CustomAPIError('Not authorized to access this route',401)
        throw new UnauthenticatedError('Not authorized to access this route')
    }
    

   

}
module.exports=authenticationMiddleware