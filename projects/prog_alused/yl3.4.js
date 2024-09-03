const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Mitu pöialpoissi tahab õunu? `, input => {
    let total = 14, apples = 0, appleCount = 0;


    let x = input;
    while (x > 0) {
        appleCount = Math.floor(Math.random() * 2) + 1;
        apples += appleCount;
        console.log(appleCount)
        x -= 1
    }
    console.log(`Lumivalgekesele jäi ${total - apples}`)
    rl.close()
});