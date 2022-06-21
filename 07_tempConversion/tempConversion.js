const ftoc = function(inputF) {
  let outputC = (inputF - 32)*(5/9);
  outputC = +outputC.toFixed(1)
  return outputC;
};

const ctof = function(inputC) {
  let outputF = (inputC * (9/5)) + 32;
  outputF = +outputF.toFixed(1);
  return outputF;
};


// npm test tempConversion.spec.js

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
