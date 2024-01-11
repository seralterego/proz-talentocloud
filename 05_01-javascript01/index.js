/*let idade = 31;
console.log(idade)

let cidade = "Itapevi"
cidade = "Fortaleza"
console.log(cidade)

let bebida = "Café"
bebida = "Cerveja"
console.log(bebida)
*/
/* ////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////// */

/* =========== EXEMPLO COM PROFESSOR */

// var emailDigitado = "sergio@proz.com.br"
// var emailDigitado = "sergio@proz.com.br"
// var idDigitado = 8

// /*verificar se é o que temos cadastrado*/
// // var emailCadastrado = "rand@proz.com.br"
// var emailCadastrado = "sergio@proz.com.br"
// var idCadastrado = 8

// if (emailDigitado === emailCadastrado || idDigitado === idCadastrado) {
//   console.log("Os dados são iguais")
// } else {
//   console.log("Os dados são diferentes")
// }
/* ////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////// */

/* =========== EXERCÍCIO
   - Criar um algoritmo que verifica se a pessoa tem idade e habilitação para dirigir
*/

/*var idadePermitida = 18
var terHabilitacao = true

var idadeDoAluno = 28
var temHabilitacao = true

function podeDirigir() {
  if (idadeDoAluno >= idadePermitida && terHabilitacao === temHabilitacao) {
    console.log("Tem permissão para dirigir (mas não igual o Toretto)")
  } else {
    console.log("Não pode dirigir nem o Herby")
  }
}

podeDirigir()*/
/* ////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////// */

/* =========== PRATICANDO */
/* Escreva uma estrutura condicional com o operador lógico OR (||) que imprima a mensagem
"Deseja mudar de senha?" caso o email ou o id forem iguais aos digitados no começo,
e a mensagem "Usuário sem autorização" caso contrário.*/
// var emailUsuarioCadastrado = "admin@proz.com.br"
// var idUsuarioCadastrado = 10

// var emailUsuario = "aluno@proz.com.br"
// var idUsuario = 1004

// if (emailUsuarioCadastrado === emailUsuario || idUsuarioCadastrado === idUsuario) {
//   console.log("Deseja mudar de senha?")
// } else {
//   console.log("Usuário sem autorização")
// }

/*Criem mais duas variáveis: uma que guarde a senha de um usuário
e outra que guarde se o usuário tem permissões de administrador ou não.
Lembrem que um usuário deve poder mudar sua senha à vontade,
mas a permissão de administrador é atribuída apenas no momento da criação do usuário
e não pode ser alterada depois.*/
// var senhaUsuarioCadastrado = "admin123"
// var adminUsuarioCadastrado = true

// var senhaUsuario = "admin5479"
// var adminUsuario = false

/*Na sequência, criem duas novas estruturas condicionais.
A primeira estrutura deve imprimir a mensagem “Por favor, insira sua nova senha”
caso o usuario e a senha estejam corretos, e imprimir “Username / senha incorretos”
caso qualquer um dois esteja errado.*/
// if (emailUsuarioCadastrado === emailUsuario && senhaUsuarioCadastrado === senhaUsuario) {
//   console.log("Por favor, insira sua nova senha.")
// } else {
//   console.log("Username / senha incorretos")
// }
/*A segunda estrutura condicional deve imprimir
a mensagem “Você não pode acessar esta parte do sistema”
caso o usuário não tenha permissões de administrador, e a mensagem
“Bem-vindo(a) à área de administrador” caso tenha sim as permissões necessárias.*/
// if (adminUsuarioCadastrado === true) {
//   console.log("Você não pode acessar esta parte do sistema")
// } else {
//   console.log("Username / senha incorretos")
// }
/* ////////////////////////////////////////////////////////////////////////////////////// */
/* ////////////////////////////////////////////////////////////////////////////////////// */

/* =========== OBJETO LITERAL em JS */
var usuario = {
  nome: "João",
  idade: 50,
  email: "joao@email.com.br",
  id: 1,
  cidade: "Belém",
};
// acessando informação
var cidadeUsuario = usuario.cidade;
console.log(cidadeUsuario);
