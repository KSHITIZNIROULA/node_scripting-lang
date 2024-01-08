let peopleArray = [];
function addPerson(name, age) {
    let person = {
        name: name,
        age: age
    }
    peopleArray.push(person);
}
function removeLastPerson() {
    if (peopleArray.length > 0) {
        
        peopleArray.pop();
        console.log("Last person removed.");
    } else {
        console.log("No people to remove.");
    }
}
addPerson("pranjal", 25);
addPerson("sonam", 30);
addPerson("bojraj", 22);

console.log(" after adding people:", peopleArray);
removeLastPerson();
console.log("after removing the last person:", peopleArray);
