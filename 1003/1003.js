/*Leia dois valores inteiros,
 no caso para variáveis A e B. A seguir, 
 calcule a soma entre elas e atribua à variável SOMA. 
 A seguir escrever o valor desta variável. */

let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

let soma = a + b;

console.log('SOMA = ' + soma);