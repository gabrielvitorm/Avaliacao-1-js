function verificarPalindromo(palavra) {
    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            return `${palavra} não é um palíndromo.`;
        }
    }
    return `${palavra} é um palíndromo.`;
}

let palavra = prompt("Digite uma palavra:");
console.log(verificarPalindromo(palavra));