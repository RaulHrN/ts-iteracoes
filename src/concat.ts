type Hortifruti = string | number;

let frutas: Hortifruti[] = ["maçã", "uva", "banana"];

let legumes: string[] = ["couve-flor", "beterraba", "cenoura", "Berinjela"];

let numeros: number[] = [2, 3,4,5,6];

// Combina arrays e retorna somente um //

const arrayConcat: Hortifruti[] = frutas.concat(legumes).concat(numeros);

const arrayConcat2: Hortifruti[] = [...frutas, ...legumes, ...numeros];

console.log(arrayConcat2);