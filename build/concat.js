"use strict";
let frutas = ["maçã", "uva", "banana"];
let legumes = ["couve-flor", "beterraba", "cenoura", "Berinjela"];
let numeros = [2, 3, 4, 5, 6];
// Combina arrays e retorna somente um //
const arrayConcat = frutas.concat(legumes).concat(numeros);
const arrayConcat2 = [...frutas, ...legumes, ...numeros];
console.log(arrayConcat2);
