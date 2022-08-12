"use strict";
let frutas2 = ["maçã", "uva", "banana"];
let legumes2 = ["couve-flor", "beterraba", "cenoura", "Berinjela"];
// Copia os dois primeiros elementos e substitui os ultimos dois elementos //
const arrayCopyWithin = legumes2.copyWithin(2, 0); //(0, 2) faz o reverso
console.log(arrayCopyWithin);
