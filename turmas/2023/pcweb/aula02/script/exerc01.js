const btExecuta = document.getElementById("executa")

btExecuta.onclick = function() {
    // recuperar a frase digitada
    const txtFrase = document.getElementById("frase")
    let frase = txtFrase.value
    
    // separar a frase em palavras
    let listaPalavras = frase.split(" ")
    let listaInvertidas = []
    console.log(listaPalavras)

    // inverter as palavras
    for (let i=0; i<listaPalavras.length; i++) {
        let palavra = listaPalavras[i]
        let palavraInvertida = ""
        for(let j=palavra.length-1; j>=0; j--) {
            palavraInvertida += palavra[j]
        }
        listaInvertidas.push(palavraInvertida)
    }
    // imprimir as palavras invertidas na ordem
    const resultado = document.getElementById("resultado")

    let fraseInvertida = ""
    for(let k=0; k< listaInvertidas.length;k++){
        fraseInvertida += listaInvertidas[k] + " "
    }
    resultado.innerHTML = fraseInvertida
}