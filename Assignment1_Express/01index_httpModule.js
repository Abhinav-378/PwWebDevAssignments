const http = require('http');

const port = 3024
const hostname = 'localhost'

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode = 200;
        res.setHeader('content-type','text/plain')
        res.end('Welcome to Men & Women Dummy Data')
    }
    else if(req.url == '/mens'){
        res.statusCode = 200;
        res.setHeader('content-type','application/json')
        const options = {
            hostname : 'fakestoreapi.com',
            path : 'products/category/men\'s%20clothing',
            method: 'GET'
        }
        
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data)=>{
                res.statusCode=200
                res.setHeader('Content-type', 'application/json')
                res.end(data.toString())
            })
        })
        apiReq.on("error",(err)=>{
            console.log(err);
        })
        apiReq.end()

    }
    else if(req.url == '/womens'){
        res.statusCode = 200;
        res.setHeader('content-type','application/json')
        const options = {
            hostname : 'fakestoreapi.com',
            path : 'products/category/women\'s%20clothing',
            method: 'GET'
        }
        
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data)=>{
                res.statusCode=200
                res.setHeader('Content-type', 'application/json')
                res.end(data.toString())
            })
        })
        apiReq.on("error",(err)=>{
            console.log(err);
        })
        apiReq.end()

    }
    else{
        res.statusCode=500
        res.setHeader('Content-type', 'text/plain')
        res.end('Server error!')
    }
})

server.listen(port, ()=>{
    console.log(`Server running at ${hostname}: ${port}`);
})