var x = 34.00; 
var y = 456e5; // 45600000
var z = 123e-6 // 0.000123

var a = 999999999999999; // max 15 num
var b = 0.9999999999999999; // max 16 num

console.log(a);
console.log(b);

var c = 0x100;
var d = 0xFFF;
console.log(c);
console.log(d);

var e = 07777;
console.log(e.toString(2));

console.log(x.toExponential());
console.log(x.toExponential(4));

console.log(y.toFixed(1));

console.log((3.357).toPrecision(2));