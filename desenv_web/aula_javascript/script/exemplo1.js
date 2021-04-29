
var alunos =  ["Ana", "Paulo", "João", "José", "Amanda"];
/*
for(var i=0; i<alunos.length;i++){
    console.log(alunos[i]);
}

for(aluno of alunos){
    console.log(aluno);
}

*/


/*
var metodo1 = (param1, param2) => {
    if(param2==undefined) {
        console.log("Recebeu apenas 1 parametro = " + param1);
    } else {
        console.log(param1 + ", " + param2);
    }
}

metodo1("Ana", "João");

*/

var idade= 12;
function retornaIdade(escola) {
    var msg = "Estudante do(a) "+ escola + " " + this.nome + ", morador de " + this.endereco.logradouro + ", tem " + this.idade;
    return msg;
}
var aluno = {nome: "Roberto"
    , idade: 23
    , disciplinas: ["Fundamentos da Web", "Banco de dados", "Programação 1"]
    , endereco: {
        logradouro: "Rua Pres. Vargas"
        , numero: "1"
        , bairro:"Centro"
    }
};

console.log(retornaIdade.apply(aluno, ["CEFET"]));