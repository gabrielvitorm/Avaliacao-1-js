let aluno = {
    nome: prompt("Digite o nome do aluno:"),
    notas: [],
    media: function() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }
};

for (let i = 0; i < 3; i++) {
    aluno.notas.push(parseFloat(prompt(`Digite a nota ${i + 1} do aluno:`)));
}

console.log(`${aluno.nome} tem uma média de ${aluno.media()}`);