let tarefas = [];
for (let i = 0; i < 5; i++) {
    let tarefa = prompt("Digite uma tarefa:");
    tarefas.push(tarefa);
}

console.log("Tarefas:", tarefas);

let tarefaConcluida = prompt("Qual tarefa deseja marcar como concluída?");
let index = tarefas.indexOf(tarefaConcluida);
if (index !== -1) {
    tarefas.splice(index, 1);
}

console.log("Tarefas atualizadas:", tarefas);