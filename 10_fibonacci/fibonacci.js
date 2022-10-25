const fibonacci = function (index) {
    index = +index;
    if (index < 1) {
        return "OOPS";
    }
    let firstTerm = 0;
    //let secondTerm = 1;
    let newTerm = 1;
    for (let i = 1; i < index; i++) {
        newTerm = firstTerm + newTerm;
        firstTerm = newTerm - firstTerm;
    }
    return newTerm;
};


// Do not edit below this line
module.exports = fibonacci;
