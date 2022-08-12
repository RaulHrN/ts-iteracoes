"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const every_1 = require("./every");
const nums = [40, 50, 60, 30, 20];
//Atua como acumulador
/* console.log(
  nums.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
  })
);

console.log(
  nums.reduceRight((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return previousValue - currentValue;
  })
);
 */
console.log(every_1.produtosS.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return Object.assign(Object.assign({}, currentValue), { preco: previousValue.preco + currentValue.preco });
}));
