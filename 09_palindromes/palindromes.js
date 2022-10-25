const palindromes = function (text) {
    text = text.toLowerCase();
    let textArray = text.split("");
    for (let i = textArray.length - 1; i >= 0; i--) {
        let letterCheck = /^[a-z]+$/;
        if (textArray[i].match(letterCheck)) {
            console.log(textArray[i])
            continue;
        }
        else {
            console.log(textArray[i], ", this is not a letter");
            textArray.splice(i,1);
            continue;
        }
    }
    let reverseArray = [];
    for (let i = 0; i < textArray.length ; i++) {
        reverseArray.unshift(textArray[i]);
    }
    text = textArray.join();
    let reverse = reverseArray.join();
    console.log(text, reverse);
    if (text === reverse) {
        return true;
    }
    else {
        return false;
    }
};


//npm test palindromes.spec.js
// Do not edit below this line
module.exports = palindromes;