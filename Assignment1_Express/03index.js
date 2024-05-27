const express = require('express')
const app = express()

const port = 2050
const hostname = 'localhost'


app.get('/',(req,res)=>{
    res.send({msg:'Welcome to PW Skills'});
})
app.get('/about',(req,res)=>{
    res.send({msg:'About page'});
})
app.get('/contact',(req,res)=>{
    res.send({email:'support@pwskills.com'});
})
app.listen(port, ()=>{          
    console.log(`Server running at ${hostname}:${port}`);
})