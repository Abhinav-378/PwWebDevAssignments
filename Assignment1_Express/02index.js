const express = require('express')
const app = express()

const port = 2042
const hostname = 'localhost'

var counter = 0;
app.get('/',(req,res)=>{
    res.send(`Counter: ${counter}`);
})
app.get('/increment',(req,res)=>{
    counter = counter+1;
    res.send(`Counter: ${counter}`);
})
app.get('/decrement',(req,res)=>{
    counter = counter-1;
    res.send(`Counter: ${counter}`);
})
app.listen(port, ()=>{          
    console.log(`Server running at ${hostname}:${port}`);
})