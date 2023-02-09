
require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app=express();
const mainRouter=require('./routes/app')
const errorHandlerMiddleware=require('./middleware/error-handler')
//middleware
app.use(express.json())
app.use('/api/v1',mainRouter)
app.use(errorHandlerMiddleware)



const port = process.env.PORT 
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})