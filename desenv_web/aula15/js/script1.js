// var name = "Maria";

// function ola() {
// 	console.log("Olá, " + name);
// }











// var mariaObj = {}; // namespace
// mariaObj.name = "Maria";

// mariaObj.ola = function(){
// 	console.log("Olá, " + mariaObj.name);
// }






















// var mariaObj = {};
// mariaObj.name = "Maria";
// var saudacao = "Olá, ";
// mariaObj.ola = function(){
// 	console.log(saudacao + mariaObj.name);
// }









(function(){
//gero um contexto novo! 

})();


//Immediately Invoked Function Expression
//IIFE
(function(contexto){
	var mariaObj = {};
	mariaObj.name = "Maria";
	var saudacao = "Olá, ";
	mariaObj.ola = function(){
		console.log(saudacao + mariaObj.name);
	}

	contexto.maria = mariaObj;
})(window);



/*
(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);
*/