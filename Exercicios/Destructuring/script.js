// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

console.log(btnStyles.backgroundColor)
console.log(btnStyles.margin)
// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';


[cursoAtivo,cursoInativo] = [cursoInativo,cursoAtivo]


// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor:bobCor } = cachorro;