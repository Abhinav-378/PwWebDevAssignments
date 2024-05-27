const http = require('http')

const hostname = 'localhost'
const port = 3006

const server = http.createServer((req, res)=>{
    res.end( "I Am Happy To Learn Full Stack Web Development From PW Skills!");
})

server.listen(port, ()=>{
    console.log('server is active at ',hostname,':',port);
})