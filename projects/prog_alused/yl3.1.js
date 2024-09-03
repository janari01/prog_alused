const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Mitu korda aratada: `, arv => {
    
    for (let x = 0; x < arv; x++) {
        console.log('Touse ja sara!')
    }
    rl.close()
});