const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage ainepunktide arv: `, punkte => {
  rl.question(`Sisestage n2dalate arv: `, week => {
    console.log(Math.round(punkte * 26 / week));
    // 1 punkte = 26h
    rl.close();
  });
});