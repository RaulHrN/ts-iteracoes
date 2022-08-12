interface Produto {
  nome: string;
  preco: number;
}

export const produtosS: Produto[] = [
  {nome: "salgadinho", preco: 5},
  {nome: "Pacote de Bala", preco: 12},
  {nome: "Vinho", preco: 56}
];

//Checa se algum dos elementos corresponde ao requisito e retorna true ou false//

console.log(produtosS.every(checkPreco));

function checkPreco(produto: Produto): boolean {
  return produto.preco > 10;
};