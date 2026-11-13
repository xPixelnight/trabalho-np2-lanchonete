// Trabalho NP2 — fluxo principal.
// Utilize as funções de pedidos.js e relatorios.js neste arquivo.
import * as relatorio from "./relatorios.js";

function iniciarSistema() {
    // TODO: implementar o menu usando prompt(), estruturas de repetição,
    // condicionais e chamadas às funções dos outros arquivos JavaScript.
    // Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar;
    // 5 resumo; 6 resumo em JSON; 0 sair.

    entrada = prompt("Escolha uma opção: \n 1 - Cadastrar \n 2 - Listar \n 3 - Buscar \n 4 - Entregar \n 5 - Resumo \n 6 - Resumo (JSON) \n 0 - Sair");

    if (entrada == 1) {
        cadastrarPedido();
    }
    else if (entrada == 2) {
        listarPedidos();
    }
    else if (entrada == 3) {
        buscarPedido();
    }
    else if (entrada == 4) {
        entregarPedido();
    }
    else if (entrada == 5) {
        exibirResumo();
    }
    else if (entrada == 6) {
        gerarResumoJSON();
    }
}
iniciarSistema();

// TODO: chamar iniciarSistema() quando a implementação estiver pronta.
