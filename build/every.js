"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtosS = void 0;
exports.produtosS = [
    { nome: "salgadinho", preco: 5 },
    { nome: "Pacote de Bala", preco: 12 },
    { nome: "Vinho", preco: 56 }
];
//Checa se algum dos elementos corresponde ao requisito e retorna true ou false//
console.log(exports.produtosS.every(checkPreco));
function checkPreco(produto) {
    return produto.preco > 10;
}
;
