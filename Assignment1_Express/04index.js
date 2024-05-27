const express = require('express')
const app = express()

const port = 2053
const hostname = 'localhost'


app.get('/',(req,res)=>{
    res.send('Go to /random page');
})
app.get('/random',(req,res)=>{
    res.send(`Random No: ${Math.floor(Math.random()*100)}`);
})

app.listen(port, ()=>{          
    console.log(`Server running at ${hostname}:${port}`);
})