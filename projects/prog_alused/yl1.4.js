const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisesta oma nimi: `, nimi => {
  rl.question(`Sisestage lubatud kiirus: `, lubatud => {
    rl.question(`Sisestage tegelik kiirus: `, tegelik => {
        let trahv = Math.abs(lubatud - tegelik)
        console.log(`${nimi}, trahv on ${Math.min(trahv * 3, 190)} eurot`)
        rl.close();
      });
  });
});