"use strict";
const motos = ["BMW", "Honda", "Yamaha", "Suzuki", "Harley Davidson"];
//Procura o valor determinado dentro do array e retorna true ou false//
if (motos.includes("BMW")) {
    console.log("Existem motos da BMW");
}
if (motos.includes("BMW", 2)) { // O ", x" indica a posição que a procura deve começar. No caso, começar da posição 2 ("Yamaha");
    console.log("Existem motos da BMW");
}
else {
    console.log("Não existem motos da BMW");
}
