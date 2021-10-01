const mymodule= require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory,extension,(err,filtredList)=>{
    if(err) return console.log(err);
    filtredList.forEach(file => {
        console.log(file);
    });
});