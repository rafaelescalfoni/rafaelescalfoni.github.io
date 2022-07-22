$(function(){
    
    $("#buscaEndereco").click(function(){
        var url = "https://viacep.com.br/ws/";
        var cep = "" //pegar do input;
        url += cep + "/json/";
        url = `https://viacep.com.br/ws/20230120/json`;
        $.get(url, function(data, status){
            //programa para carregar o endereço na página;
            $(".endereco-logradouro").text(data.logradouro);
            
        })
    })
    
});
