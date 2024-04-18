// Verifique a distância da primeira imagem
// em relação ao topo da página

const DistFirstImg = document.querySelector(".animais-lista")

console.log(DistFirstImg.offsetTop)

// Retorne a soma da largura de todas as imagens

  const imagens = document.querySelectorAll('img');
  let soma = 0 
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth
  })
  console.log(soma)



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) => {
  const width = link.offsetWidth;
  const height = link.offsetHeight;
  if(width >= 48 && height >= 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  }
  console.log(height)
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-width: 720px)').matches
const menu = document.querySelector('.menu')

if (small) { 
  menu.classList.add('menu-mobile')
} else {
  menu.classList.remove('menu-mobile')
}

console.log(small)


