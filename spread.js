const number = [1, 2, 3, 4, 5];
 
const num = [32, 34,...number, 10, 324, 56];
num.push(55);
console.log(number);
console.log(num);

/* object spread operator */
const person = {
    name: "Samudra",
    address: 'Dhaka'
}

person.email = 'xyz';
const newPerson = { ...person };

newPerson.phone = '23445';
person.roll = 13;
person.name = 'Karmaker'

console.log(person);
console.log(newPerson);