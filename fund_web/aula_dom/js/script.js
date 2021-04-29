    let figura = document.getElementById("fig");

    figura.onclick = function() {
        
        figura.classList.toggle("fig-pequena");
        figura.classList.toggle("fig-grande");
    }

    
    let btn = document.getElementById("btnTeste");

    function mudaNit() {
        console.log("clicou no botão");
        figura.src = "./img/nit.png";
    }

    function mudaRio() {
        figura.src= "./img/rio.png";
    }

    function testaNav() {
        console.log(figura.previousSibling);
    }

    btn.addEventListener("click", testaNav);
    btn.addEventListener("dblclick", mudaRio);



/* programando a lista de compras */
let btnAddItem = document.getElementById("addItem");

let lista = document.getElementById("lista");

document.querySelector(".trash").onclick = function() {
    let itemClicado = this.parentNode;
    itemClicado.parentNode.removeChild(itemClicado);
}

btnAddItem.onclick = function(){ 
    //criar um elemento html
    let liNovo = document.createElement("li");
    //adicionar o texto que vem do input
    let iptItem = document.querySelector("input[type=text]");
    liNovo.innerHTML = iptItem.value + " <a href='#' class='trash'>Apagar</a>";
    //anexar o elemento criado ao DOM
    document.getElementById("lista").pendChild(liNovo);
}