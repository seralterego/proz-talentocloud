/* Exemplo professor */
/* //Pegar o elemento h2
const elementoH2 = document.querySelector('h2');
//Exibir o elemento
console.log(elementoH2);
//Mudar a cor do elemento
elementoH2.style.color = 'red';
//Mudar o tamanho da fonte do elemento
elementoH2.style.fontSize = '50px'; */

/* ///////////////////////////////////////////////////////////////////// */

/* Exercício 01 */
/* const elementoh2 = document.querySelector('h2')
console.log(elementoh2)
elementoh2.style.color = 'green'; */

/* const error = document.getElementsByClassName('error-text');
console.log(error);
error[0].style.color = 'purple'; */

/* const login = document.getElementById('login-usuario');
console.log(login);
login.style.fontSize = '55px'; */

/* const elementoLabel = document.querySelectorAll('label');
console.log(elementoLabel);
elementoLabel[0].style.fontSize = '20px'; */



/* Exemplo professor 02 */
/* //Capturar o input do nome do usuário pelo ID
const usernameInput = document.getElementById('login-usuario');
console.log(usernameInput)

//Capturar o input do nome do usuário pelo ID
usernameInput.classList.add('error') */


//Usuario certo e senha errada
const usuarios = ["crisciany", "talyta", "alvaro", "sergio"]
const senhas = [1234]

function validarUsuario(e) {
  // e.preventDefault();
  //pegando o valor do usuario
  let usuario = document.getElementById('login-usuario');

  for (let i = 0; i < usuarios.length; i++) {
    if (usuario.value == usuarios[i]) {
      console.log(usuarios[i])
    } else {
      console.log("Deu ruim")
    }
  }

  /* if (usuario.value == '') {
    console.log("Campo vazio")
  } else if (usuario.value != '') {
    console.log("Campo preenchido")
  } */
  /* if (usuario.value === usuarios) {
    console.log("Tem no array")
  } else if (usuario.value != usuarios) {
    console.log("Não tem no array")
  } */
}
validarUsuario()

function validarSenha(){}