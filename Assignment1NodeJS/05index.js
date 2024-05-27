const fs = require('fs')

fs.unlink('nodejs_arch.txt', function(err){
    if(err){
        console.log(err);
        return err;
    }
    console.log('File deleted succesfully!');
})