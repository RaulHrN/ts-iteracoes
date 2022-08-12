const numsSort: number[] = [40, 50, 60, 30, 20];
const funcSort: string[] = ["Raul", "Gustavo", "Antonio", "Hideki", "Beatriz", "Leo"];
const stringNum: string[] = ["60", "50", "70"];

//Ordena os Elementos em ordem Alphanumérica (Alphabética => números);

console.log("Sem Sort: " + numsSort);
console.log("Com Sort: " + numsSort.sort());

console.log("Sem Sort: " + funcSort);
console.log("Com Sort: " + funcSort.sort());

const newArray = funcSort.concat(stringNum.sort());

console.log("Sem Sort: " + newArray);
console.log("Com Sort: " + newArray.sort());