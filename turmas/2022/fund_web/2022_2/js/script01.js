const loadButton  = document.querySelector("#load")

loadButton.addEventListener("click", function() {
    //Getting a String value
    const insertedText = document.querySelector("#insert").value
    
    //Getting an Element HTML (DIV)
    const contentDiv = document.querySelector("#content")
    
    //Inserting a value into div#content
    contentDiv.innerText = insertedText
})

const searchButton = document.querySelector("#search")

const searchTerm = (selInput, selOutput) => {
    //getting the HTMLElement value with search term
    const searchIpt = document.querySelector(selInput)
    const searchIptStr = searchIpt.value
    //getting the output HTMLElement
    const contentDiv = document.querySelector(selOutput)
    
    let contentDivStr = contentDiv.innerText

    contentDivStr = contentDivStr.replaceAll('\n', `<br>`)

    contentDivStr = contentDivStr.replaceAll(searchIptStr, `<mark>${searchIptStr}</mark>`)

    contentDiv.innerHTML = contentDivStr
}

searchButton.addEventListener("click", function() {
    searchTerm("#searchIpt", "#content")
})

const searchIpt = document.querySelector("#searchIpt")

searchIpt.addEventListener("keyup", function() {
    searchTerm("#searchIpt", "#content")
})
