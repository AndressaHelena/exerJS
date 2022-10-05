/*Leia dois valores inteiros. A seguir, 
calcule o produto entre estes dois valores e atribua esta operação à variável PROD. 
A seguir mostre a variável PROD com mensagem correspondente.*/

let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

let prod = a * b;

console.log('PROD = ' + prod);