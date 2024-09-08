const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisesta ringide arv: `, ringid => {
    
    let porgandid = 0;

    let x = 1
    while (x <= ringid) {
        x % 2 == 0 ? porgandid += x : false;
        x++;
    }
    console.log(`Porgandite koguarv on ${porgandid}`)

    rl.close()
});