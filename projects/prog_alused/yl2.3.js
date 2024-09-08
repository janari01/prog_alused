const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`Sisestage vanus: `, vanus => {
    rl.question(`Sisestage sugu (M, m, N voi n): `, sugu => {
        rl.question(`Sisestage treeningu tüüp (1, 2 voi 3): `, type => {
            
            let maxPulse = sugu === 'M' || sugu === 'm' ? 220 - parseInt(vanus) : 206 - (parseInt(vanus) * 0.88)

            switch(type) {
                case '1':
                    console.log(`Pulsisagesud vahemikus ${Math.round(maxPulse * 0.5)} kuni ${Math.round(maxPulse * 0.7)}`)
                    break
                case '2':
                    console.log(`Pulsisagesud vahemikus ${Math.round(maxPulse * 0.7)} kuni ${Math.round(maxPulse * 0.8)}`)
                    break
                case '3':
                    console.log(`Pulsisagesud vahemikus ${Math.round(maxPulse * 0.8)} kuni ${Math.round(maxPulse * 0.87)}`)
                    break
            }


            rl.close()
        });
    });
});

// meestel 220 miinus vanus ja naistel 206 miinus 88% vanusest


// tervisetreening 50-70% maksimaalsest pulsisagedusest,

// põhivastupidavuse treening 70-80% maksimaalsest pulsisagedusest,

// intensiivne aeroobne treening 80-87% maksimaalsest pulsisagedusest.


// (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening)