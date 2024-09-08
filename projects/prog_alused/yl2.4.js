const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Valite istekoha ise "ise" voi loosite "loos"? `, istekoht => {
    if (istekoht === 'loos') { console.log('Istekoht loositi,', Math.random() < 1/3 ? 'aken' : 'vahekaigukoht'); rl.close() }
    else {
        rl.question(`Kas soovite istuda akna aares "aken" voi mitte "muu"? `, windowornot => {
            
            if (istekoht === 'ise') {
                windowornot === 'aken' ? console.log(`Valisite ise, aken`) : console.log(`Valisite ise, vahekaigukoht`)
            }


            rl.close()
        });
    };
});