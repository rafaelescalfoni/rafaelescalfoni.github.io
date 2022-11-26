const sumButton = document.querySelector("#sum")
const sumOddsButton  = document.querySelector("#sumOdds")
const product  = document.querySelector("#product")

const putResult = (list, total, selOutput, funcName) => {
    const output = document.querySelector(selOutput)
    output.innerHTML = `O valor da ${funcName} de (${list}) é ${total}`
}

sumButton.addEventListener("click", function() {
    let valuesStr = document.querySelector("#numVal").value
    let valuesList = valuesStr.split(",")
    let total = valuesList.reduce(function(acum, elem){
        return acum + Number(elem)
    }, 0)

    putResult(valuesStr, total, "#output", "soma")
    
})

sumOddsButton.addEventListener("click", function() {
    let valuesStr = document.querySelector("#numVal").value
    let valuesList = valuesStr.split(",")
    let total = valuesList.reduce(function(acum, elem){
        return (Number(elem)%2 !== 0) ? acum + Number(elem) : acum 
    }, 0)
    putResult(valuesStr, total, "#output", "soma impares")
})

product.addEventListener("click", function() {
    let valuesStr = document.querySelector("#numVal").value
    let valuesList = valuesStr.split(",")
    let total = valuesList.reduce(function(acum, elem){
        return acum * Number(elem)
    }, 1)
    putResult(valuesStr, total, "#output", "produto")
})