const express = require('express')
const port = 3001
const app = express();
const cors= require('cors')

app.use(cors())
app.use(express.json())

app.get('/',(res,req)=>{
    app.send("Welcome")
})

app.post('/signup',(res,req)=>{
    try {
        const{Username,Email,Password,DateofBirth}=req.body
        if(!Username)
            return res.status(200).json({message : "Username cannot be empty"})
        
        if(!Email)
            return res.status(200).json({message : "Email cannot be empty"})

        const len=Password.length
        if(len<8 || len>16)
            return res.status(200).json({message : "Password length should be greater than 8 or less than or equal to 16"})

        
    } 
    catch(e)  
    {
        console.log(e.message)        
    }
})

app.listen(port,()=>{
    console.log(`The port is successfully connected: ${port}`)
})