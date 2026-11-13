// Trabalho NP2 — funções de relatórios.
// Os pedidos estão armazenados no array 'pedidos', definido em pedidos.js.

function exibirResumo() {
    let total = pedidos.length;
    let entregues = 0;
    let pendentes = 0;
    let valorTotal = 0;

    for (let i = 0; i < pedidos.length; i++) {
        valorTotal += pedidos[i].valor;

        if (pedidos[i].entregue === true) {
            entregues++;
        } else {
            pendentes++;
        }
    }

    console.log("Total de pedidos: " + total);
    console.log("Entregues: " + entregues);
    console.log("Pendentes: " + pendentes);
    console.log("Valor total: R$ " + valorTotal);

    // TODO: calcular e exibir total de pedidos, entregues, pendentes e valor total.
}

function gerarResumoJSON() {
    let total = pedidos.length;
    let entregues = 0;
    let pendentes = 0;
    let valorTotal = 0;

    for (let i = 0; i < pedidos.length; i++) {
        valorTotal += pedidos[i].valor;

        if (pedidos[i].entregue === true) {
            entregues++;
        } else {
            pendentes++;
        }
    }

    let resumo = {
        total: total,
        entregues: entregues,
        pendentes: pendentes,
        valorTotal: valorTotal
    };

    let json = JSON.stringify(resumo);

    console.log(json);

    // TODO: criar o objeto do resumo, converter com JSON.stringify() e exibir.
}
