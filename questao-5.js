function tabelaMultiplicacao(numero) {
    if (numero > 0) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    } else {
        console.log('Por favor, insira um número positivo.');
    }
}

let numero = parseInt(prompt("Digite um número positivo:"));
tabelaMultiplicacao(numero);