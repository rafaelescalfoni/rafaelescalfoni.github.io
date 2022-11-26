const changeColorButton = document.querySelector("#changeColor")


changeColorButton.addEventListener("mouseover", function() {
    let redVal = Math.ceil(Math.random()*255) 
    let greenVal = Math.ceil(Math.random()*255) 
    let blueVal = Math.ceil(Math.random()*255) 

    document.body.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`

    const outputDiv = document.querySelector("#content")

    outputDiv.innerHTML = `<h3>Cor de fundo = rgb(${redVal},${greenVal},${blueVal})</h3>`
})