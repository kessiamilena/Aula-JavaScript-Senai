// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let anterior = 0
let prox = 1

console.log(anterior)
console.log(prox)

for ( let contador = 3; contador <= 10; contador++ ) {

    let fib = anterior + prox

    anterior = prox
    prox = fib
    console.log(fib)
}

// 0 1 1 2 3 5 8 