const valores: number[] = [22, 14, 98.65, 5.99];

//Usado para filtrar um array. Retorna um array com os Elementos que passam por um teste (if valores < 14, por exemplo)

const result: number[] = valores.filter((valor) => valor <= 14);

console.log (result);

/* function checkValor(valores: number): boolean{
    return valores <= 14;
}
 */
/* Exemplo de uma function resumida usando filter e includes
    
    const noteFilter = notes.filter((item: string) => item.includes("a"));
    
*/