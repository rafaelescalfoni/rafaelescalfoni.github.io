const carregaFilmes = catalogo => {
    const filmes = catalogo //JSON.parse(catalogo)
    const ulFilmes = document.querySelector("#listaFilmes")
    filmes.forEach(filme => {
        ulFilmes.innerHTML += `<li>${filme.titulo}</li>`
    })
    console.log(filmes)
}

const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"

if(self.fetch) {
    fetch(url) // recuperar o objeto response (resposta produzida)
        .then(resp => resp.json())
        .then(data =>{ carregaFilmes(data)})
        .catch( err =>{ console.log(`deu erro ${err.message}`)})

} else {

    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200)
            carregaFilmes(this.responseText)
    }
    xhttp.open("get", url, true)

    xhttp.send()

}

