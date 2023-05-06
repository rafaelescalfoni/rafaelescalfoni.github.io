const pegaElem = seletor => document.querySelector(seletor)

const lerIptNumero = (seletorElem) => {
    const entrada = document.querySelector(seletorElem)
    return parseFloat(entrada.value) || 0
}

/*
Exercício 1
*/
const botao01 = document.getElementById("exerc01")


const soma = (op1, op2) => op1 + op2

const apagaIpt = seletor => {
    document.querySelector(seletor).value = ""
}

//ao clicar no botao...
botao01.onclick = function(){
    //pegar o primeiro número
    const num1 = lerIptNumero("#ex01-num01")

    //pegar o segundo número
    const num2 = lerIptNumero("#ex01-num02")

    //somar os dois 
    const resultado = soma(num1, num2)

    //exibir o resultado no parágrafo#resp01
    const paragrafo01 = document.getElementById("resp01")
    paragrafo01.innerHTML = `O resultado da soma entre os números <strong>${num1}</strong> e <strong>${num2}</strong> é <strong>${resultado}</strong>`

    //apagar os inputs
    apagaIpt("#ex01-num01")
    apagaIpt("#ex01-num02")
}

/*
Exercício 2
*/  
//Ao clicar no botao exerc02
const botao02 = document.querySelector("#exerc02")


const comparar = (num1, num2) => {
    if (num1 > num2) {
        return `O número ${num1} é maior que o número ${num2}`
    } 
    if (num1 < num2) {
        return `O número ${num2} é maior que o número ${num1}`
    } 
    return "Os números são iguais"
}

botao02.addEventListener("click", function() {
    //recuperar os valores das inputs
    const num1 = lerIptNumero("#ex02-num01")
    const num2 = lerIptNumero("#ex02-num02")
    // exibir resultado
    pegaElem("#resp02").innerHTML = comparar(num1, num2)
})

botao02.addEventListener("click", function() {
    //apagar os inputs
    apagaIpt("#ex02-num01")
    apagaIpt("#ex02-num02")
})

/*
Exercício 3
*/
const botao03 = pegaElem("#exerc03")

const isPrimo = num => {
    if(num<2) return false

    for(let i=2; i<(num**1/2); i++) 
        if (num % i == 0) return false
    return true
}
//ao clicar no botao exerc03
botao03.addEventListener("click", function(){
    //pegar o valor de ex03-num
    const num = lerIptNumero("#ex03-num")

    pegaElem("#resp03").innerHTML = `O número ${num} ${isPrimo(num)? "": "não"} é primo`
})

botao03.addEventListener("click", function(){
    apagaIpt("#ex03-num")
})
/*
Exercício 4
*/
const botao04 = pegaElem("#exerc04")
const getIntervaloPar = (num1, num2) => {
    let inicio = num1, fim = num2
    if(num1 >num2) {
        inicio = num2
        fim = num1
    }
    let resposta = ""
    // armazenar os pares entre os números
    for(let i = inicio; i<fim; i++) {
        resposta  += ((i%2==0) ? `${i}, `: "")
    }
    return resposta.substring(0,resposta.length-2)
}
//ao clicar no botao exerc04
botao04.addEventListener("click", function() {
    // pegar o num1
    const num1 = lerIptNumero("#ex04-num01")
    // pegar o num2
    const num2 = lerIptNumero("#ex04-num02")

    //exibir
    pegaElem("#resp04").innerHTML = getIntervaloPar(num1, num2)
})

/*
Exercício 5
*/
const botao05 = pegaElem("#exerc05")
const fibo = n => {
    let ant = 1, aux= 0, prox = 0, resposta = ""
    for(let i=0; i < n; i++) {
        resposta += `${prox}, `
        aux = ant
        ant = prox
        prox += aux
    }
    return resposta.substring(0, resposta.length-2)
}
//Ao clicar no botao exerc05
botao05.addEventListener("click", function() {
    //pegar o inteiro positivo n
    const num = lerIptNumero("#ex05-num")
    //exibir
    pegaElem("#resp05").innerHTML = fibo(num)
})

/*
Exercício 6
*/
const botao06 = pegaElem("#exerc06")
//Ao clicar no botao exerc06
botao06.addEventListener("click", function(){
    //pegar uma temperatura em celsius
    const tempC = lerIptNumero("#ex06-num")
    //aplicar a formula de conversao
    const tempF = (9/5)*tempC + 32
    //exibir
    pegaElem("#resp06").innerHTML = tempF
})
    