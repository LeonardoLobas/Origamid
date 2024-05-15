// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const body = document.querySelector('body');
let isBlue = false;

setInterval(function() {
    if (isBlue) {
        body.style.backgroundColor = 'red';
    } else {
        body.style.backgroundColor = 'blue';
    }
    isBlue = !isBlue;
}, 2000);




// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
