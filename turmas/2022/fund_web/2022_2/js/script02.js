const loadButton  = document.querySelector("#load")

const countSpecialChar = () => {
    //Getting an Element HTML (DIV)
    const contentDiv = document.querySelector("#content")
    const bagOfWords = contentDiv.innerText.split(" ")
    
    let acum = 0

    for (let i=0; i<bagOfWords.length; i++){
        let wordLenght = bagOfWords[i].length
        let lastChar = bagOfWords[i].substring(wordLenght-1, wordLenght)


        if (".,-:\"\'".indexOf(lastChar) != -1) 
            acum++

            
    }
    const outputDiv = document.querySelector("#content")
    outputDiv.innerHTML += `<p>Ocorrencias de caracteres especiais no fim das palavras ${acum}` 
}

loadButton.addEventListener("click", function() {
    //Getting a String value
    const insertedText = document.querySelector("#insert").value
    
    //Getting an Element HTML (DIV)
    const contentDiv = document.querySelector("#content")
    
    //Inserting a value into div#content
    contentDiv.innerText = insertedText

    countSpecialChar()
})

const countButton = document.querySelector("#count")
countButton.addEventListener("click", function() {
    const countIpt = document.querySelector("#countIpt")
    const searchTerm = countIpt.value
    //Getting an Element HTML (DIV)
    const contentDiv = document.querySelector("#content")
    const bagOfWords = contentDiv.innerText.split(" ")

    let acum = 0
    console.log(bagOfWords)
/*
    for (word of bagOfWords){
        console.log(word)
        acum += (word.toLowerCase() == searchTerm.toLowerCase() ) ? 1: 0
    }
*/
    bagOfWords.forEach(word => {
        acum += (word.toLowerCase() == searchTerm.toLowerCase()) ? 1 : 0
    })
    const outputDiv = document.querySelector("#content")
    outputDiv.innerHTML += `<p>O termo <b>${searchTerm}</b> aparece <b>${acum}</b> vezes</p>` 
})

