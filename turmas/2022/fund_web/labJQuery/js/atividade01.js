//função construtora de objetos Produto
function Livro(id, nome, autores, estilo){
	this.id = id;
	this.nome = nome;
	this.autores = autores;
	this.estilo = estilo;
}

// programar a inserção dos novos livros no array listaLivros e sua adição no DOM
function adicionarLivro(livro){
// seu programa aqui.
}

// programar a remoção do livro no array listaLivros e sua remoção no DOM
function removerLivro(livro){
// seu programa aqui.
}

var listaLivros = [];
		
$(function(){

	$("#adicionar").click(function(){
		var tituloLivro = $("#titulo").val();
		var autores = $("#autores").val();
		var estilo = $("#estilo").val();
		var descricao = $("#descricao").val();
		$("#acervo").append(
				$("<tr>")
					.append($("<td>").text(tituloLivro))
					.append($("<td>").text(autores))
					.append($("<td>").text(estilo))
					.append($("<td>").text(descricao))
					.append($("<td>")
						.append($("<a>")
								.attr("href", "#")
								.text("Apagar"))
					)
		)
		$("#titulo").val("");
		$("#autores").val("");
		$("#estilo").val("");
	});

	$("#acervo").on("click", "a", function(){
		$(this).parents("tr").remove();
	})

	$("#excluir").click(function(){
		
	})

	$("#apagarAcervo").click(function(){
		$("#acervo").empty();
		$("#acervo")
			.append($("<tr>")
						.append($("<th>").text("Título"))
						.append($("<th>").text("Autores"))
						.append($("<th>").text("Estilo"))
						.append($("<th>").text(""))
					)
	})
/*
	$("#enviar").click(function(){
		//let url = "https://157.230.5.17/web/livros.php";/* passarei para vocês mais tarde 
		
		let url = "http://httpbin.org/post";
		let dados = $("#dados").val(); /* pegar o valor do input #dados 
		$.post(url, dados, function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		  }
		);
	})
	*/
});