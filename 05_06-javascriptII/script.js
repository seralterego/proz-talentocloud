const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

const linkPerfilDados = document.getElementById("link-perfil-dados");

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block"
})

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log(e.code);

  /* if(navPerfil.style.display == "block") {
    if(e.code == "Digit1") {
      console.log("Abre o menu de perfil")
      linkPerfilDados.click()
    }
  } */

  if (e.code == "Digit1") {
    console.log("Abre o menu de perfil")
    navPerfil.style.display = "block"
  } /*else if (e.code == "Escape") {
    console.log("Fecha o menu de perfil")
    navPerfil.style.display = "none"
  } */
  /* if (linkPerfil != "block") {
    if (e.code == "Digit1") {
      console.log("Abre o menu de perfil")
      navPerfil.style.display = "block"
    } else if (e.code == "Escape") {
      console.log("Fecha o menu de perfil")
      navPerfil.style.display = "none"
    }
  } else if (linkPerfilDados == "block") {
    linkPerfilDados
  } */ else if (e.code == "Backspace") {
    navPerfil.style.display = "none"
  }
})








//Ir até a página Meu Perfil
//Caso a navegação secundária esteja visível
/* if (linkPerfilDados == "block") {
  console.log("Clique habilitado para o menu");

} */
//Caso a navegação secundária não esteja visível.


/* SOLUÇÃO DO DANILO >>> switch/case */
/* const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block";
});

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log(e.code);

  switch (e.code) {
    case "Digit1":
      if (navPerfil.style.display === "block") {
        linkPerfilDados.click();
      } else {
        navPerfil.style.display = "block";
      }
      break;
    case "Escape":
      navPerfil.style.display = "none";
      break;
  
    default:
      break;
    }
  }
}); */