// Adicione a classe ativo a todos os itens do menu

const itensmenu = document.querySelectorAll(".menu a")
itensmenu.forEach((item) => {
  item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensmenu.forEach((item) => {
  item.classList.remove('ativo');
})

itensmenu[0].classList.add("ativo")

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuialt = img.hasAttribute("alt")
  console.log(possuialt)
})

// Modifique o href do link externo no menu

const link = document.querySelector("a[href^='https']")
link.setAttribute("href", )





