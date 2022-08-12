const veiculos: string[] = [
  "BMW",
  "Honda",
  "Yamaha",
  "Suzuki",
  "Harley Davidson",
];

//Retorna um novo array com a porção selecionada || Não retorna o Elemento do indexEnd//
//Exemplo: (1, 4) só vai retornar "1: Honda", "2: Yamaha", "3: Suzuki"//

console.log("============ SLICE ===============");

console.log(veiculos.slice(1, 4));

/*========================================================*/

//SPLICE: Modifica o array adicionando um Elemento na posição desejada. Também pode modificar o Elemento original da posição desejada//

console.log("=========== SPLICE ===============");
veiculos.splice(4, 0, "Tesla");
console.log("Adicionar TESLA na posição 4: ");
console.log(veiculos);

veiculos.splice(5, 1, "Cherry");
console.log("Substituir Harley Davidon por CHERRY na posição 5: ");
console.log(veiculos);