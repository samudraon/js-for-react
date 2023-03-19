/* Array destructuring */
const num = [1, 2, 3, 4, 5];
const [first, second, third] = num;
console.log(first, second, third);


const obj = {
    name: 'x',
    roll: 123,
    address:'Mym'
}
const { name, roll, address } = obj;
console.log(name, roll, address);