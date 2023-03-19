const person = {
    name: 'Samudra',
    email: 'sam@gmail.com',
    address: 'Dhaka',
    phone: [1233, 3451],
    34: 'Hello World',
    'job-type': 'Developer'
}

/* 1st way */
const value1 = person.name;
console.log(value1)


/* 2nd way */
const value2 = person['name'];
console.log(value2);


/* 3rd way */
const prop = 'name';
const value3 = person[prop];
console.log(value3);

console.log(person['34']);
const p = 'job-type'
console.log(person[p]);

/* obj set and get */
const obj = {}

obj.name = 'Sam';
obj['address']='Bari Nai'

const propName = 'phone'
obj[propName] = '1242';

// console.log(obj);

/* object keys and values */
const keys = Object.keys(obj);
const values = Object.values(obj);
console.log(keys);
console.log(values);

for (let i of keys) {
    console.log(obj[i]);
}