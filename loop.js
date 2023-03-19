const arr = [1, 2, 3, 4, 5];
/* for loop */
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/* for of loop */
for (let i of arr) {
    console.log(i);
}



/* for in loop for object properties and value */
const obj = {
    name: 'Samudra Karmaker',
    number: '0234',
    address: 'Dhaka'
}
for (let i in obj) {
    console.log(i);
}
for (let i in obj) {
    console.log(obj[i]);
}



/* while loop */
// let i = 0;

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// };