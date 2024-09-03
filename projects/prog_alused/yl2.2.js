const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage Leedu perenimi: `, nimi => {
    let sliced = nimi.slice(-2)
    sliced[0] === 'n' ? console.log('Abielus') : sliced[0] === 't' ? console.log('Vallaline') : (sliced[0] !== 't' && sliced[0] !== 'n' && sliced[sliced.length - 1] === 'e') ? console.log('Maaramata') : console.log('Pole leedulanna perekonnanimi')
    rl.close()
});