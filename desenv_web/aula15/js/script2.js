// var name = "João";

// function oi(){
// 	console.log("Oi, " + name);
// }












// var joaoObj = {}; //namespace
// joaoObj.name = "João";

// joaoObj.oi = function(){
// 	console.log("Oi, " + joaoObj.name);
// }






















// var joaoObj = {};
// joaoObj.name = "João";
// var saudacao = "Oi, ";
// joaoObj.oi = function(){
// 	console.log(saudacao + joaoObj.name);
// }












//Immediately Invoked Function Expression
//IIFE

(function(window){
	var joaoObj = {};
	joaoObj.name = "João";
	var saudacao = "Oi, ";
	joaoObj.oi = function(){
		console.log(saudacao + joaoObj.name);
	}

	window.joao = joaoObj;
})(window);



/*
(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);
*/
