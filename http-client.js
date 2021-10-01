const http=require('http');
const url=process.argv[2];

http.get(url,(response)=>{
    // response.setEncoding('utf8')
    response.on('error',(err)=>console.log(err));
    response.on('data',data=>console.log(data.toString()));
});