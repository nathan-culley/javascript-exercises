let string = 'hey';
let number;

const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    else {
        string = string.repeat(num);
        return string;
    }
}

for (number; number < 1000; number++) {
    repeatString(string,num);
}
// Do not edit below this line
module.exports = repeatString;
