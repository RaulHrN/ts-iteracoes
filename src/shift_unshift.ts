const produtosTech: string[] = ["Notebook", "Placa-mãe", "Memória Ram", "Mouse"];

//SHIFT: Remove o primeiro Elemento do array//

console.log("SHIFT: " + produtosTech.shift()); // Retorna o valor removido
console.log("SHIFT: " +produtosTech);

/*===================================================*/

//UNSHIFT: Adiciona um valor no começo do array//

produtosTech.unshift("Computador");

console.log("UNSHIFT: " +produtosTech);