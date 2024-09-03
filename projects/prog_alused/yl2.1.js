const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage õhutemperatuur: `, arv => {
    let out = arv <= 4 ? 'On jaatumise oht.' : 'Ei ole jaatumise ohtu.'
    console.log(out)
    rl.close()
});