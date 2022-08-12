"use strict";
const carros = ["Polo", "Celta", "Corsa", "Uno"];
//Substitui o valor original do Elemento//
console.log(carros.fill("Mercedes")); //Substitui todos os valores
console.log(carros.fill("Toyota", 1, 3)); //substitui o valor dos dois ultimos Elementos
