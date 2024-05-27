const fs = require('fs')

fs.readFile('nodejs_arch.txt', function(err,data){
    if(err){
        console.log(err);
        return err;
    }
    console.log('Data: ', data.toString());
})