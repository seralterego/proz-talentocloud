/* //////////////// CARRINHO ////////////////// */
//Variáveis e dados
//adicionar qntd. Produto
let btnAdicionarProduto01 = document.querySelector('#btn-adicionar-produto-01');
//diminuir qntd. Produto
let btnDiminuirProduto01 = document.querySelector('#btn-subtrair-produto-01');
//quantidade do Produto
let quantidadeProduto01 = document.querySelector('#quantidade-produto-01');
//estoque do Produto
let estoqueProduto01 = 10;

/* ////////////////// SUBTOTAL ////////////////// */
//Captura elementos do HTML
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

//Cria objeto com informações do subtotal
let subtotalInfo = {
	quantidade: 1,
	valor: 11.66,
};

//Redefine elementos
function atualizarSubtotalNoDOM() {
	//redefine a quantidade
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
	//redefine o valor
  valorSubtotal.innerText = subtotalInfo.valor;
	//corrigi as casas decimais
	valorSubtotal.innerText = novoSubTotal.toFixed(2);
	//calcula o valor unitário x a quantidade de produtos
	novoSubTotal = Number(subtotalInfo.valor) * Number(quantidadeProduto01.value);
}

//FUNÇÕES
//adicionar
function AdicionarUm() {
	//adiciona a quantidade até o limite do estoque
	if (quantidadeProduto01.value <  estoqueProduto01) {
		quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
	} else {
		quantidadeProduto01.value = estoqueProduto01;
	}
	//manipular o Dom no subtotal
	subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
	//chamar função para atualizar Subtotal
	atualizarSubtotalNoDOM()
}

function DiminuirUm() {
	//diminui a quantidade até 0
	if (quantidadeProduto01.value > 0) {
		quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
	}
	//chamar função para atualizar Subtotal
	atualizarSubtotalNoDOM()
}

//Eventos
btnAdicionarProduto01.addEventListener("click", AdicionarUm);
btnDiminuirProduto01.addEventListener("click", DiminuirUm);
