let content = document.querySelector('#content')

let criaPassos = preparo => 
    preparo.reduce(
        (lista,passo) => lista + `<li>${passo}</li>`
        , "")


let criaReceita = (receita) => {
    let receitaDiv = document.createElement("div")
    receitaDiv.classList.add("receita")
    receitaDiv.innerHTML += `<img src="${receita.foto}" 
                    alt="${receita.nome}">
                    <h2>${receita.nome}</h2>
                    <h3>Descrição</h3>
                    <p>${receita.descricao}</p>
                    <div>
                        <div>
                            <h3>Preparo</h3>
                            <ol>${criaPassos(receita.preparo)}</ol>
                        </div>
                        <div>
                            <h3>Ingredientes</h3>
                            <ul>
                                ${criaPassos(receita.ingredientes)}
                            </ul>
                        </div>
                    </div>`
    return receitaDiv
}

receitas.forEach(receita => {
    content.appendChild(criaReceita(receita))
})



console.log(receitas)
/*
<div class="receita">
    <img src="receita.foto" alt="receita.nome">
    <h2>receita.nome</h2>
    <h3>Descrição</h3>
    <p>receita.descricao</p>
    <div>
        <div>
            <h3>Preparo</h3>
            <ol>
                <li>receita.preparo[0]</li>
            </ol>
        </div>
        <div>
            <h3>Ingredientes</h3>
            <ul>
                <li>receita.ingredientes[0]</li>
            </ul>
        </div>
    </div>
</div>
*/