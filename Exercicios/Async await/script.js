async function puxarDados() {
    try{
        const responseDados = await fetch('./dados.json');
        const jsonDados = await responseDados.json();
        document.body.innerText = jsonDados.squadName;
    } catch (erro) {
        console.log(erro);
    }
}

puxarDados();