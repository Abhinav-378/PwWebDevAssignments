const app = require('./app.js');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>{
    console.log(`Server is running at localhost:${PORT}`);
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);

    server.close(()=>process.exit(1));
})