'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hanoi' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY posts as parameter.
 */

function hanoi(discs) {
    // Write your code here
    if(discs.every(disc => disc === 1)) return true
    const move = (discs) => {
        let alvo = discs.length
        let counter = 0
        while(true){
            if(discs[alvo] === 1 && alvo === 0) break
            // Avança para o  proximo
            if(discs[alvo] === 1 && alvo > 0) alvo -= 1
            // Verifica se pode mover
            if(discs[alvo] > discs[alvo-1]) {
                console.log('checa se vai mover')
                if(discs.filter(val => val === discs[alvo+1]).length > 0) {
                    console.log('nao pode')
                    alvo -= 1
                    }
                else {
                    console.log('pode')
                    discs[alvo] = discs[alvo-1]
                    counter++
                    continue
                    }
                }
            for(let i = 1; i <= 4; i++){
                console.log('poste '+i+' livre?')
                for (let index in discs){
                    console.log(discs)
                }
            }
        }
        return counter
    }

    return move(discs)

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const loc = readLine().replace(/\s+$/g, '').split(' ').map(locTemp => parseInt(locTemp, 10));

    const res = hanoi(loc);

    ws.write(res + '\n');

    ws.end();
}
