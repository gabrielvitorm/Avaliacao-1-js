let produtos = [];
for (let i = 0; i < 3; i++) {
    let nome = prompt(`Digite o nome do produto ${i + 1}:`);
    let preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}:`));
    let quantidade = parseInt(prompt(`Digite a quantidade em estoque do produto ${i + 1}:`));
    produtos.push({ nome: nome, preco: preco, quantidade: quantidade });
}

function valorTotalEstoque(produtos) {
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco * produtos[i].quantidade;
    }
    return total;
}

console.log("Valor total do estoque:", valorTotalEstoque(produtos));