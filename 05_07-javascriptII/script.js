let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById('username-helper');

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById('email-helper');

let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById('idade-helper');

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById('senha-helper');
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById('confirma-senha-helper');

/* ////////////////////////////////////////////////////////////////////////////// */
//Função para mostrar/ocultar popups de campo obrigatório
function mostrarPopup(input, label) {
  //Mostrar popup
  input.addEventListener("focus", function(){
    label.classList.add("required-popup");
  })
  //Ocultar popup
  input.addEventListener("blur", function(){
    label.classList.remove("required-popup");
  })
}

/* ////////////////////////////////////////////////////////////////////////////// */
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
//Chamando função para apresentar o popup de campo obrigatório
mostrarPopup(usernameInput, usernameLabel)

/* ------------------------------------------------------------------------------ */
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
//Chamando função para apresentar o popup de campo obrigatório
mostrarPopup(emailInput, emailLabel)

/* ------------------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------------------ */
//senha
function senhaUsuario() {
  senhaInput.addEventListener("change", (evento) => {
    let valorSenha = evento.target.value;
    //regex para definir regra da senha de 8 a 20 caracteres e pelo menos um caractere especial
    let regex = /^(?=.*[@!#$%^&*()\[\]/\\])[@!#$%^&*()\[\]/\\a-zA-Z0-9]{8,20}$/;
  
    //o regex.test vai "testar" o valor recebido (no caso valorSenha) entrando no if/else
    if (valorSenha == '') {
      //estilo dinâmico caso o valor seja vazio
      senhaInput.classList.remove("correct");
      senhaInput.classList.remove("error");
      senhaInput.classList.remove("visible");
      senhaHelper.classList.remove("visible");
    } else if (regex.test(valorSenha)) {
      //estilo dinâmico caso o valor seja válido
      senhaInput.classList.add("correct");
      senhaInput.classList.remove("error");
      senhaInput.classList.remove("visible");
      senhaHelper.classList.remove("visible");
    } else {
      //estilo dinâmico caso o valor não seja válido
      senhaInput.classList.remove("correct");
      senhaInput.classList.add("error");
      senhaHelper.classList.add("visible");
      senhaHelper.innerText = "Sua senha tem que ter 8 a 20 caracteres e pelo menos um caractere especial";
    }

    //console só pra identificarmos a senha que está sendo digitada (excluir se for subir pra algum lugar)
    console.log('Dentro do listener senhaInput:', valorSenha);
  }, true)
}

//Chamando função de validação da senha
senhaUsuario();
//Chamando função para apresentar o popup de campo obrigatório
mostrarPopup(senhaInput, senhaLabel)

/* ------------------------------------------------------------------------------ */
//confirmar senha
function confirmarSenhaUsuario() {
  confirmaSenhaInput.addEventListener("change", (evento) => {
    let valorConfirmarSenha = evento.target.value;
    let regex = /^(?=.*[@!#$%^&*()\[\]/\\])[@!#$%^&*()\[\]/\\a-zA-Z0-9]{8,20}$/;
  
    if (valorConfirmarSenha == '') {
      //estilo dinâmico caso o valor seja vazio
      confirmaSenhaInput.classList.remove("correct");
      confirmaSenhaInput.classList.remove("error");
      confirmaSenhaInput.classList.remove("visible");
      confirmaSenhaHelper.classList.remove("visible");
    } else if (regex.test(valorConfirmarSenha)) {
      //estilo dinâmico caso o valor seja válido
      confirmaSenhaInput.classList.remove("error");
      confirmaSenhaInput.classList.remove("visible");
      confirmaSenhaInput.classList.add("correct");
      confirmaSenhaHelper.classList.remove("visible");
    } else {
      confirmaSenhaHelper.classList.remove("visible");
      //estilo dinâmico caso o valor não seja válido
      confirmaSenhaInput.classList.remove("correct");
      confirmaSenhaInput.classList.add("error");
      confirmaSenhaHelper.classList.add("visible");
      confirmaSenhaHelper.innerText = "Sua senha tem que ter 8 a 20 caracteres e pelo menos um caractere especial";
    }

    //console só pra identificarmos a senha que está sendo digitada (excluir se for subir pra algum lugar)
    console.log('Dentro do listener confirmaSenhaInput:', valorConfirmarSenha);
  }, true)
}

//Chamando função de validação da confirmação de senha
confirmarSenhaUsuario();
//Chamando função para apresentar o popup de campo obrigatório
mostrarPopup(confirmaSenhaInput, confirmaSenhaLabel)

/* ------------------------------------------------------------------------------ */
//Função para comparar senhas
function compararSenhas() {
  let status = false;
  let camposVazios = senhaInput.value == '' && confirmaSenhaInput.value == '';
  let senhasDiferentes = senhaInput.value != confirmaSenhaInput.value;
  
  if (camposVazios) {
    status = false;
  } else if (senhasDiferentes) {
    status = true;
    //estilo dinâmico caso as senhas sejam diferentes entre si
    confirmaSenhaInput.classList.remove("correct");
    confirmaSenhaInput.classList.add("error");
    confirmaSenhaHelper.classList.add("visible");
    confirmaSenhaHelper.innerText = "Senhas diferentes...corrija para seguir!";
  }
  return status;
}

//adiciona um novo evento no senhaInput, mas agora, chamando a função compararSenhas
senhaInput.addEventListener('change', compararSenhas);
//adiciona um novo evento no confirmaSenhaInput, mas agora, chamando a função compararSenhas
confirmaSenhaInput.addEventListener('change', compararSenhas);
