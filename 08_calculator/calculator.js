const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let addition = 0;
  a.forEach(function(addend) {
    addition = addition + addend;
  })
  return addition;
};

const multiply = function(a) {
  let product = 1;
  a.forEach(function(multiplier) {
    product = product * multiplier;
  })
  return product;
};


const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let product = 1;
  for (let i = 1; i <= a; i++) {
    product = product * i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

//npm test calculator.spec.js