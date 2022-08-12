"use strict";
const var1 = [22, 14, 98.65, 5.99];
//Retorna o primeiro valor que passar no teste. Procura o primeiro valor//
const resultado = var1.find(checkVar1);
console.log(resultado);
function checkVar1(var1) {
    return var1 >= 100;
}
//O findIndex funciona da mesma forma, mas vai retornar a posição do elemento//
const resultadoIndex = var1.findIndex(checkVar1);
console.log(resultadoIndex);
//O IndexOf funciona de forma parecida, mas não retorna boolean. Vai retornar a posição do primeiro elemento correnspondente//
const resultadoIndexOf = var1.indexOf(14);
console.log(resultadoIndexOf);
