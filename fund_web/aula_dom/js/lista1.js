document.getElementById("exer1").onclick= function(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let soma= parseFloat(n1)+parseFloat(n2);
    console.log(soma);

    //criar o elemento html
    let h1Resposta = document.createElement("h1");
    //adicionar o texto ao elemento criado
    let nodeText = document.createTextNode(`O resultado da soma é ${soma}`);
    h1Resposta.appendChild(nodeText);
    //adicionar o elemento novo ao DOM
    document.body.appendChild(h1Resposta);
}