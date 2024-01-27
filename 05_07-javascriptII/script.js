let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById('username-helper');

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById('email-helper');

let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById('idade-helper');

let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById('idade-helper');

/* //////////////////////////////////////////////////////// */

//Função para mostrar popups
function mostrarPopup(input, label) {
  //Mostrar popup de campo obrigatório
  input.addEventListener("focus", function(){
    label.classList.add("required-popup");
  })
  //Ocultar popup de campo obrigatório
  input.addEventListener("blur", function(){
    label.classList.remove("required-popup");
  })
}

//Validação de valores do input
//username
usernameInput.addEventListener("change", function(evento) {
  let valorUsername = evento.target.value;
  console.log(valorUsername);

  if (valorUsername.length < 3) {
    //estilo dinâmico caso o valor não seja válido
    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");
    usernameHelper.innerText = "Seu username deve ter 3 ou mais caracteres";
    usernameHelper.classList.add("visible");
  } else {
    //estilo dinâmico caso o valor seja válido
    usernameInput.classList.remove("error");
    usernameInput.classList.remove("visible");
    usernameInput.classList.add("correct");
    usernameHelper.classList.remove("visible");
  }
})
//Chamando função para apresentar o popup do username
mostrarPopup(usernameInput, usernameLabel)

//email
emailInput.addEventListener("change", (evento) => {
  let valorEmail = evento.target.value;
  console.log(valorEmail);

  if (valorEmail.includes('@') && valorEmail.includes('.com')) {
    //estilo dinâmico caso o valor seja válido
    emailInput.classList.remove("error");
    emailInput.classList.remove("visible");
    emailInput.classList.add("correct");
    emailHelper.classList.remove("visible");
  } else {
    //estilo dinâmico caso o valor não seja válido
    emailInput.classList.remove("correct");
    emailInput.classList.add("error");
    emailHelper.innerText = "Email inválido";
    emailHelper.classList.add("visible");
  }
})
//Chamando função para apresentar o popup do email
mostrarPopup(emailInput, emailLabel)

//idade
idadeInput.addEventListener("change", (evento) => {
  let valorIdade = evento.target.value;
  console.log(valorIdade);

  if (valorIdade >= 18) {
    //estilo dinâmico caso o valor seja válido
    idadeInput.classList.remove("error");
    idadeInput.classList.remove("visible");
    idadeInput.classList.add("correct");
    idadeHelper.classList.remove("visible");
  } else {
    //estilo dinâmico caso o valor não seja válido
    idadeInput.classList.remove("correct");
    idadeInput.classList.add("error");
    idadeHelper.innerText = "Menor de idade não são permitidos.";
    idadeHelper.classList.add("visible");
  }
})
//Chamando função para apresentar o popup da idade
mostrarPopup(idadeInput, idadeLabel)

//senha (pendente)