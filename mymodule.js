const fs= require('fs');
const path=require('path');

mymodule=(directory , extension , callback)=>{
    extension=`.${extension}`;
    fs.readdir(directory,(err,list)=>{
        if(err) return callback(err);
        const filtered=list.filter(file=>path.extname(file)===extension);
        return callback(null,filtered)
    });
}

module.exports=mymodule;