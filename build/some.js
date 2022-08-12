"use strict";
const idades = [3, 14, 15, 18, 33, 87, 102];
//Testa se pelo menos 1 dos Elementos passa no teste de uma function e retorna boolean//
console.log("Maior de idade? " + idades.some(checkIdade));
function checkIdade(idade) {
    return idade >= 18;
}
;
//Some + Slice//
const novasIdades = idades.slice(0, 3);
console.log("Maior de idade? " + novasIdades.some(checkIdade));
