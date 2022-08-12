let frutas2: string[] = ["maçã", "uva", "banana"];

let legumes2: string[] = ["couve-flor", "beterraba", "cenoura", "Berinjela"];

// Copia os dois primeiros elementos e substitui os ultimos dois elementos //

const arrayCopyWithin = legumes2.copyWithin(2, 0); //(0, 2) faz o reverso

console.log(arrayCopyWithin);