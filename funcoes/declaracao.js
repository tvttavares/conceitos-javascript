// funcoes

dizerOi("Ned");

function dizerOi (nome) {
	console.log("ola" + nome);
}

dizerOi("Jon");
dizerOi("Rob");

var dizerOla = function (nome) {
	console.log ("Ola" + nome);
};

dizerOla("Bran");

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");
dizerTchau("Rickon");

