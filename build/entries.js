"use strict";
let legumes3 = ["couve-flor", "beterraba", "cenoura", "Berinjela"];
// Retorna um array com o Index e o valor do Elemento //
const leg = legumes3.entries();
for (let i = 0; i <= legumes3.length; i++) {
    console.log(leg.next().value);
}
;
