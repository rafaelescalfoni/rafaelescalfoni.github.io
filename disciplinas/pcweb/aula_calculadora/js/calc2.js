const calculadora = document.querySelector(".calc")

const eBotao = target => target.nodeName == "BUTTON" ? true:false

const eAlgarismo = digito => ("0123456789".indexOf(digito) != -1)? true: false

const ePonto = digito => (".".indexOf(digito) != -1) ? true: false
const eOperacao = digito => ("+-*/%=".indexOf(digito) != -1) ? true:false

const adicionaAlgarismo = digito => {
    const display = document.querySelector(".calc-display")
    if (display.textContent == "0")
        display.textContent = digito
    else
        display.textContent += digito
}

const adicionaPonto = () => {
    const display = document.querySelector(".calc-display")

    if (display.textContent.indexOf(".") == -1)
        display.textContent += "."
}

let operador = null
let operacao = null

calculadora.addEventListener("click", function(evento) {
    if(eBotao(evento.target)) {
        const botaoClicado = evento.target
        const digito = botaoClicado.textContent
        if(eAlgarismo(digito))
            adicionaAlgarismo(digito)
        else if (ePonto(digito))
            adicionaPonto(digito)
        else if (eOperacao(digito)) {
            
            // salvar o valor do display
            //se o operador não estiver vazio
            if (!operador) {
                const display = document.querySelector(".calc-display")
                //Pegar o que for digitado
                display.textContent
                //fazer a operação
                if(digito == "+") {
                    display.textContent = Number(operador) + Number(display.textContent)
                }
            } else {
                
            //se o operador estiver vazio
            }
            // salvar a operação escolhida
            
            
        }
            
    }
})