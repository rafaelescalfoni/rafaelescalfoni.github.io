const calculadora = document.querySelector(".calc");

const adicionaDigito = (digito, display) => {
    //adicionando valores no display
    /*
    se numero:
        valor do display =  valor do display + valor da tecla
        
    */
    const numerosList = '1234567890'.split("")

    console.log(numerosList.indexOf(digito))

    //adicionando digitos numericos
    if(numerosList.indexOf(digito) != -1)
        display.textContent = display.textContent == "0"? digito :display.textContent + digito

    //tratando operadores aritmeticos

    // adicionando . (decimal)
    
    // porcento 

    //apagando diplay
}

const somar = (op1, op2) => op1 + op2

calculadora.addEventListener("click", function(event){
    const display = document.querySelector(".calc-display");
    const elemClicado = event.target

    if(elemClicado.tagName.toLowerCase() == "button") {
        console.log(`Botão clicado: ${elemClicado.textContent}`)
       adicionaDigito(elemClicado.textContent, display)
    }
})

/*
desafios
número decimal
    adicionar o ponto

Operações
Soma
*/