const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)  // logs "Tesla"
console.log(otherRandomCar) // logs "Mercedes"
//********************************************************

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); // Error  employee.name 
console.log(otherName); // logs "Elon"

//********************************************************
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // logs "12345"
console.log(hashedPassword); // undefined password don't exist in object person 

//*********************************************

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2
//Predict the output
console.log(first == second); // False
console.log(first == third); // True

//************************************
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;  // 'value'
const { secondKey } = lastTest; // [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //  5
//Predict the output
console.log(key);  // logs value
console.log(secondKey); // logs [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // logs 1
console.log(willThisWork); // logs 5




