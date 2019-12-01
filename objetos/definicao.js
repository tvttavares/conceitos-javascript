var obj = {	
	nome: "jon", 
	sobrenome: "snow", 
	idade: 16,
	apresentar: function(){
		console.log("ola, eu sou ", this.nome + ' ' + this.sobrenome + '.');
	},
	// metodo de um objeto
	apresentacao: apresentacao
};

function apresentacao(){
	console.log("ola, eu sou ", this.nome + ' ' + this.sobrenome + '.');
}

console.log(obj.sobrenome);

obj.apresentar();
obj.apresentacao();