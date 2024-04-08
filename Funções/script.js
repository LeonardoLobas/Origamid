// Times que eu ja joguei e quantos faltam no brasil !

// var quantidade = parseInt(prompt("Em quais times você já jogou?"))
// function times(jajoguei){
//     var total = 20 
//     return console.log(`Faltam ${total - quantidade} a jogar`)
// }

// times()

// Crie uma função para verificar se um valor é Truthy


function isTruthy(valor) {
    return !!valor;
}
console.log(isTruthy("Leonardo"))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(tamanho){
    var totalperimetro = tamanho * 2
    return `Seu quadrado tem ${totalperimetro}m2`
}

console.log(perimetro(2))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome]

function nomecompleto(nome,sobrenome){
    var completname = nome + " " + sobrenome
    return `Seu nome é ${completname}`
}

console.log(nomecompleto("leonardo","lobas"))


// Crie uma função que verifica se um número é par

function par(numero){
    if ((numero % 2) === 0) 
    return `Este numero é par`
else {
    return "Este numero é impar"
}
}
console.log(par(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipodedado(dado){
    return typeof dado;
}
console.log(tipodedado(42))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function nome_completo() {
     console.log("Leonardo Lobas");
}
addEventListener("scroll",nome_completo);

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    var totalPaises = 193;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  