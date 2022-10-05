var input = require('fs').readFileSync('stdin', 'utf8');

var [x , y] = input.split(" ")
//aqui leu como string e concatenou
console.log(x+y);

var [x , y] = input.split(" ").map(item => parseInt(item))
//aqui transformou em inteiro e fez uma soma
console.log(x+y);