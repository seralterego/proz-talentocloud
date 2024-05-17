//Evento de clique
const meuBotao = document.getElementById('meuBotao');
meuBotao.addEventListener('click', ()=> {
  console.log('Botão clicado!');
})

const meuCampo = document.getElementById('meuCampo');
meuCampo.addEventListener('input', (e) => {
  console.log(`Texto digitado: ${e.target.value}`);
})