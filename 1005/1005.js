let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let media = (a * 3.5 + b * 7.5)/11;

console.log('MEDIA = ' + media.toFixed(5));