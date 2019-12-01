
function dizerOi(nome) {
	console.log("Oi" + nome);
	//console.log(this);
}

dizerOi('Arya');
dizerOi.call(null, "Arya");
dizerOi.apply(null, ["Arya"]);
