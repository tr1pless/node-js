import colors from 'colors';
import readline from 'readline'

// const args = process.argv.slice(2)
// const [name, age] = args
// console.log(args)
// 
// console.log(colors.blue('hello' + name))
// console.log(colors.red('age' + age))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question('What do you think of node.js' , (answer) => {
    // console.log(`thank you for your valuable feedback: "${answer}"`)
    // rl.close()
// })

rl.on('line', (input) => {
    console.log(`Received: "${input}"`)
    if(input === 'exit'){
        rl.close()
    }
    console.log("Okay, we'll continue, or write 'exit' if you want finish this.")
})