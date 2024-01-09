// alert("Tudo funcionando...")
console.log("Tudo funcionando...")

/* ////////////////////////////////////////////////////////// */
/* EXPLICAÇÃO PROFESSOR */
// Capturar o elemento do logo usando getElementById
const logoElement = document.getElementById('logo');

// Imprimir o atributo alt do logo
console.log('Alt do Logo:', logoElement.alt);

// Capturar todos os elementos com a classe 'post-autor' usando getElementsByClassName
const autoresElements = document.getElementsByClassName('post-autor');

// Iterar sobre os elementos e imprimir os autores
console.log('Autores das Postagens:');
for (let i = 0; i < autoresElements.length; i++) {
  const autor = autoresElements[i].textContent;
  console.log('- ', autor);
}

/* ////////////////////////////////////////////////////////// */
/* EXERCÍCIO 01 */
// Capturar o logo da página pelo ID e imprimir o resultado:
let elemento01 = document.getElementById("logo");
console.log("Logo da página: ", elemento01);

// Capturar a 1ª lista de redes pela Classe e imprimir o resultado:
let elemento02 = document.getElementsByClassName("lista_redes");
console.log("1ª lista de redes da página: ", elemento02[0]);

// Capturar o formulário da página e imprimir o resultado:
let elemento03 = document.querySelector("form");
console.log("Formulário de comentario: ", elemento03);

// Capturar o span no footer da página e imprimir o resultado:
let elemento04 = document.querySelectorAll("span");
console.log("Span no footer da página: ", elemento04[0]);

/* ////////////////////////////////////////////////////////// */
/* EXERCÍCIO 02 */
// Capturar o link dentro do texto do primeiro post
let linkDentroTextoPrimeiroPost = document.getElementsByClassName("post-texto")[0].querySelector("a").textContent
console.log("Link dentro do texto do primeiro post: ", linkDentroTextoPrimeiroPost)
/* ---------------------------------------------------------- */
/* Solução professor */
const linkNoTextoDoPrimeiroPost = document.querySelector('#post01 .post-texto a');
console.log('Link dentro do texto do primeiro post:', linkNoTextoDoPrimeiroPost.href);
/* ---------------------------------------------------------- */

// Capturar a palavra em negrito dentro do texto do segundo post
let palavraNegritoSegundoPost = document.getElementsByClassName("post-texto")[1].querySelector("strong").textContent
console.log("Palavra negrito dentro do texto do segundo post: ", palavraNegritoSegundoPost)
/* ---------------------------------------------------------- */
/* Solução professor */
const palavraEmNegritoNoSegundoPost = document.querySelector('#post02 .post-texto strong');
console.log('Palavra em negrito no segundo post:', palavraEmNegritoNoSegundoPost.textContent);
/* ---------------------------------------------------------- */

// Capturar o input de nome do formulário
let inputNomeForm = document.getElementById("nome")
console.log("Input de nome do formulário: ", inputNomeForm)
/* ---------------------------------------------------------- */
/* Solução professor */
const inputNomeFormulario = document.querySelector('#nome');
console.log('Input de nome do formulário:', inputNomeFormulario);
/* ---------------------------------------------------------- */

// Capturar os links da lista de redes no final da página
let linksListaRedesFinalPagina = document.getElementsByClassName("lista_redes");
console.log("Lista Redes Final da Página: ", linksListaRedesFinalPagina[1]);
/* ---------------------------------------------------------- */
/* Solução professor */
const linksRedesSociais = document.querySelectorAll('.lista_redes a');
console.log('Links da lista de redes sociais:');
linksRedesSociais.forEach(link => console.log('- ', link.href));
/* ---------------------------------------------------------- */

// Capturar os links da navegação (só os links, não os elementos de lista)
let linksNavegacao = document.querySelectorAll("header .elementos_nav a")
for (let i = 0; i < linksNavegacao.length; i++) {
  console.log(linksNavegacao[i].innerHTML)
}
/* ---------------------------------------------------------- */
/* Solução professor */
const linksNavegacaorProf = document.querySelectorAll('nav a');
console.log('Links da navegação:');
linksNavegacaorProf.forEach(link => console.log('- ', link.href));
/* ---------------------------------------------------------- */

// Capturar os "Autor:" e "Data:" em negrito nos dois posts
let autorDataNegrito = document.querySelectorAll("article p.post-autor, article p.post-data");
console.log("Autor e Data negritos: ")
for (let i = 0; i < autorDataNegrito.length; i++) {
  console.log(autorDataNegrito[i].textContent)
}
/* ---------------------------------------------------------- */
/* Solução professor */
const autoresDataNegrito = document.querySelectorAll('.post-autor strong, .post-data strong');
console.log('Autores e datas em negrito nos posts:');
autoresDataNegrito.forEach(elementoNegrito => console.log('- ', elementoNegrito.textContent));
/* ---------------------------------------------------------- */

/* ////////////////////////////////////////////////////////// */
/* Exercício 03 */
//Lista de redes 
let titulos = document.querySelectorAll("footer .lista_redes a")
function imprimirTodos(lista) {
  // adicionar à função uma "frase dinâmica" que avisa quantos elementos tem a lista.
  console.log("A lista tem ", `${lista.length}`, "elementos");
  
  for (let i = 0; i < titulos.length; i++) {
    console.log(titulos[i].innerHTML);
  }
}

imprimirTodos(titulos);

/* ---------------------------------------------------------- */
/* Solução professor */
let titulosProf = document.querySelectorAll("footer .lista_redes a");

function imprimirTodos(lista) {
    console.log(`A lista contém ${lista.length} elementos:`);

    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i].innerText);
    }
}

imprimirTodos(titulosProf);
/* ---------------------------------------------------------- */
console.clear();