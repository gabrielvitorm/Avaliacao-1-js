function calculadora(num1, num2, operacao) {
    if (operacao === 'soma') {
        return num1 + num2;
    } else if (operacao === 'subtracao') {
        return num1 - num2;
    } else if (operacao === 'multiplicacao') {
        return num1 * num2;
    } else if (operacao === 'divisao') {
        return num1 / num2;
    } else {
        return 'Operação inválida';
    }
}

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (soma, subtracao, multiplicacao, divisao):");

console.log(calculadora(num1, num2, operacao));