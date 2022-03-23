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

//Lesson 3.5 - Enums
let productType = 'sports';
if (productType === 'sports') {
  console.log('Found sports product type');
}

enum ProductType {
  Sports,
  HomeGoods,
  Groceries
}
let pt = ProductType.Sports;
if (pt === ProductType.Sports) {
  console.log('Found sports product type again');
}