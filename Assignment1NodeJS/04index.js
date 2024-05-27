const fs = require('fs');

fs.appendFile('./nodejs_arch.txt', 'Node.js Server Architecture: To manage several concurrent clients, Node.js employs a “Single Threaded Event Loop” design. The JavaScript event-based model and the JavaScript callback mechanism are employed in the Node.js Processing Model. ',function(err){
    if(err){
        console.log(err);
    }
    else{    
        console.log('File appended');
    }
} )

fs.readFile('nodejs_arch.txt', function(err,data){
    if(err){
        console.log(err);
        return err;
    }
    console.log('\nFile start: \n ', data.toString());
})