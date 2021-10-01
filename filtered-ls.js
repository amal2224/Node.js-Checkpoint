// import core module
const fs = require('fs');
const path= require('path'); //given information about folders,fils ...

const directory = process.argv[2];
const extension = `.${process.argv[3]}`;
// read content of directory
fs.readdir(directory,(err,listFiles)=>{
    if(err) return console.log(err);
// console.log(list); learnyounode run filtered-ls.js
    listFiles.forEach(file=>{
        if(path.extname(file) === extension){
            console.log(file);
        }
    });
});