let input = new String();
console.log(input);

function reverseString(input) {
    //break string into an array
        let forwardArray = new Array();
        forwardArray = input.split("");
    //flip array backwards into a new array
        function flipArray(forwardArray) {
            let reverse = new Array();
            for (i = 0; i < forwardArray.length; i++) {
                reverse[i] = forwardArray[forwardArray.length - i -1];
            }
            return reverse;
        }
        const reverseArray = flipArray(forwardArray);
    //re-join array into a new string
        let newString = reverseArray.join("");
    //return new backward string
        return newString;
}
reverseString(input);

// Do not edit below this line
module.exports = reverseString;
