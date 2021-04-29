//console.log(this);

var objeto = {
    minhaFunc: function() {
        console.log(this);
    }
};

//objeto.minhaFunc();

const equipe = {
    nome: 'Programadoras JS'
    , membros: ['Nicole', 'Gisele', 'Vivian']
    , membrosDaEquipe: function(){
        let self = this;

         this.membros.forEach(function(membro) {
            console.log(`${membro} é da equipe ${self.nome}`);
         });
    }
  }; 
  
function Livro (tituloParam) {
    this.titulo = tituloParam;
}

let livro  = new Livro("Sistemas de Informação");

let livro2 = {"titulo": "O Senhor dos Anéis"
, "getLivro": function() {return this.titulo;}
};
console.log(livro.titulo);
console.log(livro2.titulo);

let livro3 = livro2;
livro2.titulo = "IHC";
console.log(livro3.titulo);