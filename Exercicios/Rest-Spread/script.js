function anunciarGanhadores(premio, ...ganhadores) {
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou um ' + premio)
    })
}


anunciarGanhadores('Carro','Pedro','Marta')

// SPREAD ==========================

function arrayLegumes(salada,...legumes) {
    legumes.forEach(legume => {
        console.log(salada + ' de ' + legume);
    });
}
function arrayFrutas(salada,...frutas) {
    frutas.forEach(fruta => {
        console.log(salada + ' de ' + fruta);
    });
}
arrayFrutas('salada','morango','banana')
arrayLegumes('salada','batata','repolho');





function arrayMisturas(legumes,frutas){
    frutas.forEach(fruta  => {
        legumes.forEach(legume =>{
            console.log(`salada de ${fruta} com ${legume}`)
        })
    })
    
}
let frutas = ['morango','banana','manga','tomate']
let legumes = ['pepino','repolho','cenoura','brocolis']
arrayMisturas(legumes,frutas);







