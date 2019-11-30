// for, for in, while, do while

var x = 0;

while (x < 10) {
	console.log("x eh igual a " + x);
	x++;
}

do {
 console.log("x eh igual a " + x);
 x = x + 1;
} while (x <= 10)

for(var y = 0; y < 10; y++) {
	console.log(y);
}

var obj = {nome: 'jon', sobrenome: 'snow'};

for (var prop in obj) {
	console.log(prop + ": " + obj[prop]); 
}