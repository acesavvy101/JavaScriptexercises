const getAge = function (birth, death) {
    if (!death) { //if there is no death argument
        death = new Date().getFullYear(); //get today's year! reassign death.
    } //this is not an else case, we always want to return this:
        return death - birth;
}

const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const olderAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    const youngerAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    if (olderAge > youngerAge) {
        return oldestPerson
    } else {
        return currentPerson
    }
  })
}
// Do not edit below this line
module.exports = findTheOldest;


  
