const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage suurus (MB): `, size => {
    rl.question(`Sisestage pealkiri: `, title => {
        rl.question(`Kaasas fail (jah/ei): `, file => {
            !title.length || (parseFloat(size) > 1.0 && file === 'jah') ? console.log('Kiri on spamm') : console.log('Kiri pole spamm')
            rl.close()
        });
    });
});