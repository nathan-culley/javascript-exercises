const removeFromArray = function(arrayInput, ...removalArg) {
    //loop through removalArg
    for (const arg of removalArg) {

        //loop through arrayInput
        let i = 0;
        while (i < arrayInput.length) {
            //check if any arrayInput element matches removalArg
            if (arrayInput[i] === arg) {
                arrayInput.splice(i, 1);
            }
            else {
                i++;
            }
        }
        
        //END loop through arrayInput

    }
    //END loop through removalArgs
    return arrayInput;
}
// npm test removeFromArray.spec.js
// Do not edit below this line
module.exports = removeFromArray;
