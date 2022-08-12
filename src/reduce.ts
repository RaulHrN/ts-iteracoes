import { produtosS } from "./every";

const nums: number[] = [40, 50, 60, 30, 20];

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

console.log(
  produtosS.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return {
      ...currentValue,
      preco: previousValue.preco + currentValue.preco,
    };
  })
);
