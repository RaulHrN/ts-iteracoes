"use strict";
let frutas = ["maçã", "uva", "banana"];
let legumes = ["couve-flor", "beterraba", "cenoura", "Berinjela"];
let precos = [14.6, 13, 19.56, 67];
// Combina arrays e retorna somente um //
const arrayConcat = frutas.concat(legumes);
console.log(arrayConcat);
//const arrayConcat2: (string | number)[] = frutas.concat(precos); || Tupla não funciona; esse método funciona, mas continua aparecendo como erro
//console.log(arrayConcat2);
