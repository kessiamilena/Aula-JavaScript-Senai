/* 

4. Faça um programa que imprima na tela a tabuada de um número
qualquer escolhido pelo usuário até o 10.

*/

let prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite o número que deseja saber a tabuada: "))

console.log('')
console.log(`** TABUADA DO ${numero} **`)
console.log('')

for (let contador = 0; contador <= 10; contador++) {
    mult = contador * numero

    console.log(`${numero} X ${contador} = ${mult}`)
}