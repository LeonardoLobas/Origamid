// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

const minhaidade = parseInt(prompt("Qual é a sua idade."))
const idadeparente = parseInt(prompt("Qual é a idade do parente escolhido."))

switch(true) {
    case minhaidade > idadeparente:
        console.log("Você é mais velho!")
        break;
    case minhaidade < idadeparente:
        console.log("Você é mais novo!")
        break;
    case minhaidade === idadeparente:
        console.log("Vocês tem a mesma idade!")
        break;
    default:
        console.log("Erro")
}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}