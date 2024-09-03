const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Taringite arv: `, arv => {
    
    for (let x = 0; x < arv; x++) {
        console.log(Math.floor(Math.random() * 6) + 1)
    }
    rl.close()
});