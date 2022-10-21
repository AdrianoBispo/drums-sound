// Faz a leitura da "index.html".
function tocaSom (seletorElemento) {

    const elemento = document.querySelector(seletorElemento);

// Essa condição é para informar que a nossa função "TocaSom" só executará o audio, se o parâmetro for "(seletorElemento)".
// Caso você entre no console do devTools e digite "TocaSom(qualquer_outra_coisa)", aparecerá a mensagem "Elemento ou Seletor Inválido".   
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else {
        console.log ('Elemento ou Seletor Inválido!'); 
    }
}

// Seleciona todas as teclas da "index.html"
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];    
    const instrumento = tecla.classList[1];        
    const idAudio = `#som_${instrumento}`; 
    
    tecla.onclick = () => {tocaSom(idAudio)}
    
    // Evento para quando a tecla for pressionada.
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    // Evento para quando a tecla for largada.
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}