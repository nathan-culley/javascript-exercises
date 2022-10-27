const findTheOldest = function(people) {
    let age = people.sort(function(firstPerson, secondPerson) {
        if (firstPerson.yearOfDeath == undefined) {
            let date = new Date();
            firstPerson.yearOfDeath = date.getFullYear();
        }
        if (secondPerson.yearOfDeath == undefined) {
            let date = new Date();
            secondPerson.yearOfDeath = date.getFullYear();
        }
        if (firstPerson.yearOfDeath - firstPerson.yearOfBirth > secondPerson.yearOfDeath - secondPerson.yearOfBirth) {
            return -1;
        }
        else {
            return 1;
        }
    })
    return age[0];
};

//npm test findTheOldest.spec.js
// Do not edit below this line
module.exports = findTheOldest;
