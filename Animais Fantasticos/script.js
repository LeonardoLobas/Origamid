// Retorne no console todas as imagens do site
const selectimagens = document.querySelectorAll("img")
 
console.log(selectimagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensAnimais = document.querySelectorAll("img[src^='/Animais Fantasticos/img/imagem']")
console.log(imagensAnimais)

// Selecione todos os links internos (onde o href começa com #)

const linksinternos = document.querySelectorAll("[href^='#']")
console.log(linksinternos)

// Selecione o primeiro h2 dentro de .animais-descricao

const primerioh2 = document.querySelector(".animais-descricao h2")
console.log(primerioh2)

// Selecione o último p do site


const ultimop = document.querySelectorAll("p");
console.log(ultimop[ultimop.length]);