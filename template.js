const person = {
    name: 'Samudra',
    email: 'sam@gmail.com',
    address: 'Dhaka',
    phone: [1233, 3451, 8321],
}

// console.log('My name is ' + person.name + ' and'+ ' my email is ' + person.email)

const information = `
    My name is ${person.name}
    and my email is ${person.email}
    My numbers ${person.phone.map(n => n).join(' ')}
`;
console.log(information);
