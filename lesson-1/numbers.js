import colors from 'colors';
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(colors.blue('Enter your number') , (number) => {
  console.log(colors.blue(`Here all prime numbers from "${number}"`))



let n = number;
let arr = [];
nextPrime: for (let i = 3; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0 ) continue nextPrime; 
  }
  arr.push(i);
}

for( let i = 0; i < arr.length; i +=3) {
  console.log(colors.green(arr[i]))
  if (arr[i+1]) {
    console.log(colors.yellow(arr[i+1]))
    if(arr[i+2]) {
      console.log(colors.red(arr[i+2]))
    }else break
  }else break
}

rl.close()
})

