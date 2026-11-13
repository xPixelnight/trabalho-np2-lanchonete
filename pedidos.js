// Pedidos fictícios para iniciar os testes. Novos pedidos devem ser adicionados a este array.
let pedidos = [
    { codigo: 101, cliente: "Ana", valor: 25.50, entregue: false },
    { codigo: 102, cliente: "Bruno", valor: 18.00, entregue: true },
    { codigo: 103, cliente: "Carla", valor: 32.90, entregue: false }
];

// Implemente abaixo as operações de gerenciamento dos pedidos.
function cadastrarPedido(pedidos) {
    
    let codigo = Number(prompt("Digite o código:"));

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].codigo === codigo) {
            alert("Código já cadastrado!");
            return;
        }
    }

    let cliente = prompt("Digite o nome do cliente:");

    if (cliente === null || cliente.trim() === "") {
        alert("Nome inválido!");
        return;
    }

    let valor = Number(prompt("Digite o valor:"));

    if (valor <= 0 || isNaN(valor)) {
        alert("Valor inválido!");
        return;
    }

    let novoPedido = {
        codigo: codigo,
        cliente: cliente,
        valor: valor,
        entregue: false
    };

    pedidos.push(novoPedido);
    alert("Pedido cadastrado com sucesso!");

    // TODO: solicitar os dados, validar e adicionar um novo pedido ao array.
}

function listarPedidos() {
    
    if (pedidos.length === 0) {
        console.log("Nenhum pedido cadastrado.");
        return;
    }

    for (let i = 0; i < pedidos.length; i++) {
        console.log("Código: " + pedidos[i].codigo);
        console.log("Cliente: " + pedidos[i].cliente);
        console.log("Valor: R$ " + pedidos[i].valor);
        console.log("Situação: " + (pedidos[i].entregue ? "Entregue" : "Pendente"));
    }

    // TODO: listar os pedidos cadastrados.
}

function buscarPedido(codigo) {
    
    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].codigo === codigo) {
            console.log(pedidos[i]);
            return pedidos[i];
        }
    }

    console.log("Pedido não encontrado.");
    return null;

    // TODO: retornar o pedido correspondente ao código, se existir.
}

function entregarPedido(codigo) {
    
    let pedido = buscarPedido(codigo);

    if (pedido === null) {
        return;
    }

    if (pedido.entregue === true) {
        console.log("Pedido já foi entregue.");
        return;
    }

    pedido.entregue = true;
    console.log("Pedido entregue com sucesso!");

    // TODO: alterar a situação de entrega do pedido encontrado.
}
