const login = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Usuario Logado')
    },1000)
})

const dados = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('Dados carregados')
    },1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
    console.log(resolucao)
})