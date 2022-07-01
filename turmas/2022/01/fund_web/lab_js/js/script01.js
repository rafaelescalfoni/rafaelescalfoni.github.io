const botao1 = document.querySelector(".executa01")

/** 
 * obtem valor 
 */ 
const obtemValor = seletor => {
    const val = document.querySelector(seletor)
    let num = isNaN(parseFloat(val.value))? 0:parseFloat(val.value)
    val.value = ""
    return num
}

/** 
 * escrever valor 
 */ 
const escreveValor = (seletor, valor) => {
    const nodeConteudo = document.createTextNode(valor)
    document.querySelector(seletor).textContent = ""
    document.querySelector(seletor).appendChild(nodeConteudo)
    //document.querySelector(seletor).innerHTML = `<h3>${valor}</h3>`
}

//atividade 01
/** 
 * calcula soma 
 */ 
const somar = (num1, num2) => num1 + num2

botao1.addEventListener("click", () => {
    const num1 = obtemValor("#questao01-val01")
    const num2 = obtemValor("#questao01-val02")
    escreveValor("#resp01", somar(num1, num2))
})

//atividade 02
/**
 * indica o maior entre dois números
 */
 const botao2 = document.querySelector(".executa02")
/**
 * Identifica o maior número
 */
const identificaMaiorNum = (num1, num2) => {
    let resp = ""
    if(num1>num2)
        resp = `O número ${num1} é maior que ${num2}`
    else if(num2>num1)
        resp = `O número ${num2} é maior que ${num1}`
    else
        resp = `Os números são iguais`
    return resp
}

botao2.addEventListener("click", () => {
    const num1 = obtemValor("#questao02-val01")
    const num2 = obtemValor("#questao02-val02")

    escreveValor("#resp02", identificaMaiorNum(num1, num2))
})



// botao.onclick = alteraConteudo
// botao.onclick = alteraCorDeFundo