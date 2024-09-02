const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage astme alus: `, alus => {
  rl.question(`Sisestage astendaja: `, astendaja => {
    console.log(alus ** astendaja);
    rl.close();
  });
});