//recuperar o botão do DOM
const btExecuta = document.getElementById("executa")

/**
 * 
 * @param {Seletor CSS} seletor 
 * @returns Number
 */
function recuperaValor(seletor) {
    return parseFloat(document.querySelector(seletor).value) || false
}

/**
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 */
function comparaNumeros(num1, num2) {
    //entrada vazia
    if(!(num1 && num2)) {
        return "Erro na entrada de dados"
    }
        
    //teste com números
    if(num1>num2) {
        return `O número ${num1} é maior que ${num2}`
    } else if (num1 == num2) {
        return `O número ${num1} é igual ao número ${num2}`
    } else {
        return `O número ${num2} é maior que ${num1}`
    }

}

function exibeMensagem (msg, seletor) {
    document.querySelector(seletor).innerHTML = msg
}

//ao clicar o botao #executa
btExecuta.onclick = function() {
    //recupera o valores
    const numero1 = recuperaValor("#num1")
    const numero2 = recuperaValor("#num2")
    //compara  num1 com num2 
    const resposta = comparaNumeros(numero1, numero2)
    // exibir o maior número
    exibeMensagem(resposta, "#resultado")
    
}
