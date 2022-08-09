import fs from "fs";
import { fib } from "./fib";

//sync
// const file = fs.readFileSync('index.html', {
// encoding: 'utf8'
// })
//
// console.log(file)

// fs.promises.readFile('index.html', {encoding: 'utf8'}).then(console.log)

//callBack
// fs.readFile('index.html',(error, data) => {
// if(error){
// console.log('error')
// }
//
// console.log(data.toString())
// })

console.log(fib(7));
