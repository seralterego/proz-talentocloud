-- let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
-- let valorSubtotal = document.getElementById("valor-subtotal");

-- let subtotalInfo = {
--   quantidade: 1,
--   valor: 11.66,
-- };

// Redefinição de elementos DOM
-- quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
-- valorSubtotal.innerText = subtotalInfo.valor;
 
// Novas variáveis
let quantidadeProduto01 = document.getElementById("quantidade-produto-01");
let botaoAdicionarUm = document.getElementById("btn-adicionar-produto-01");
let botaoSubtrairUm = document.getElementById("btn-subtrair-produto-01");
let quantidadeProdutoMaximo = 10;
 
function aplicarMudancasDom(){
  -- quantidadeSubtotal.innerText = Number(quantidadeProduto01.value) + " itens";
  -- novoSubtotal = Number(subtotalInfo.valor) * Number(quantidadeProduto01.value);
  -- valorSubtotal.innerText = novoSubtotal.toFixed(2);
}
// Funções
function adicionarUm() {
  if (Number(quantidadeProduto01.value) < quantidadeProdutoMaximo) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  }
  aplicarMudancasDom();
}
 
function subtrairUm() {
  if (Number(quantidadeProduto01.value) > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
  }
  aplicarMudancasDom();
}
 
 
// Adição de eventos
botaoAdicionarUm.addEventListener("click", adicionarUm);
botaoSubtrairUm.addEventListener("click", subtrairUm);
tem menu de contexto