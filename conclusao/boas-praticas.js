var variavelLGlobal = "";

(function() {
	var escopoLocal,
		escobo,
		foo,
		obj,
		array;


	escopoLocal = "foo";
	console.log(escopoLocal);
	
	var obj = {
		foo: "bar",
		bar: "foo",
		foobar: "oi"
	};

	var array = [
		1,
		2,
		3
	]

})();