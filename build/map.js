"use strict";
const devs = ["Raul", "Gustavo", "Antonio", "Hideki", "Leo"];
//Retorna um novo array com a function requisitada em cada Elemento//
//Utilizar quando precisar modificar valores//
for (let i = 0; i < devs.length; i++) {
    devs[i] = devs[i] + " Desenvolvedor";
}
console.log(devs);
