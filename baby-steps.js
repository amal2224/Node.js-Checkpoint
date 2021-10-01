// var index = 2;
// var sum = 0;
// while (process.argv[index]) 
// {
//     sum = sum + Number(process.argv[index]);
//     ++index
// }
// console.log(sum);

//or
var index=process.argv.slice(2);
var result = index.reduce((acc,num)=>{
    return acc + Number(num);
},0);
console.log(result);