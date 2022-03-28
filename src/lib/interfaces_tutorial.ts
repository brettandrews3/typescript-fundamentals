export interface Product {
    id: number,
    name: string,
    icon: string,
    description?: string
} 

/*
// Creating a sample product from the interface above
let product: Product = {
    id: 12,
    name: 'Product',
    icon: 'some.jpg',
    description: 'The bums lost!'
}
*/

// Lesson 5.5 - example of a type alias:
type ProductAlias = string | {
    id: number,
    name: string,
    icon: string,
    description?: string
}

let product: ProductAlias = 'Food';

enum ProductType {
    Sporting,
    Home
}

type ProductTypeList = 'SPORTING' | 'HOME';