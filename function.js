/* 1. function with no parameters and no return type */
function myFunction() {
    console.log('Hello World')
}
myFunction()



/* 2. function with parameters and no return type */
function myFunction1(x, y) {
    console.log(x + y)
}
myFunction1(5, 5);



/* 3. function with parameters and return type */
function myFunction2(x, y) {
    return (x + y)
}
const value = myFunction2(4, 5);
console.log(value);



/* function with no parameters but return type */
function myFunction3() {
    const arr = [1, 2, 4, 5];
    return arr;
}
const value1 = myFunction3(); 