// if (bool) { }

var x = 18;
var y;

if (x > 18) {
	y = "maior";
} else if (x == 18) {
	y = "igual";
} else {
	y = "menor";
}

//console.log(y);

switch(x) {
	case 18:
		y = 18;
		break;
	case 19:
		y = 19;
		break;
	default:
		y = "sei la";
}

console.log(y);