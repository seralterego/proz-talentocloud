// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function mostrarPopup(input, label){
// Mostrar popup de campo obrigatório
    input.addEventListener("focus", function(){
        label.classList.add("required-popup")

})
// Ocultar popup de campo obrigatório
    input.addEventListener("blur", function(){
    label.classList.remove("required-popup")
})
}

mostrarPopup(usernameInput, usernameLabel);

// Validar valor do input
usernameInput.addEventListener("change", function(evento){
    let valor = evento.target.value
    console.log(valor);

    if (valor.length < 3){
        //Estilos dinamicos caso o valor não seja válido
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu username deve ter 3 ou mais caracteres"
        usernameHelper.classList.add("visible");
    } else {
        //Estilos dinâmicos caso o valor seja válido
        usernameInput.classList.remove("error");
        usernameInput.classList.remove("visible");
        usernameInput.classList.add("correct");
    }
})

//VAlidação email
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel);

emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if (valor.includes("@") && valor.includes(".com")){
        //Estilos dinamicos caso o valor seja valido
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailInput.classList.add("correct");
    } else {
        //Estilos dinamicos caso o valor não seja válido
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Email inválido"
        emailHelper.classList.add("visible");
    }
})