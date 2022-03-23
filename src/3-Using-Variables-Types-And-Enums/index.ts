// string, number, boolean, array, undefined, null, any

//let firstName: string;
let firstName: string | null
firstName = 'Dude';

let age: number;
age = 42;

let productNames: string[] = [];
let hasPurchased = true;

productNames.push('Dudes');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);
