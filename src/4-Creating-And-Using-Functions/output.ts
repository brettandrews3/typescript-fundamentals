import { productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType = {
  id: number,
  name: string,
  icon?: string;
};

// This will host the learning examples from Lesson 4:
// In this export, 'id: string' refers to id in the div on index.html
export default async function updateOutput(id: string = 'output') {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: ProductType[]) {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

// async function gets products after it fetches the productsURL
async function getProducts(): Promise<ProductType[]> {
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

// run our samples:
runTheLearningSamples();

function runTheLearningSamples() {
  // hoisted to the top of the page when it's compiled
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }

  // This one should technically work bc their id types are 'any':
  // displayProductInfo(10, 'Pizza');
  
  // This one works because we use defined types from fn displayProductInfo():
  displayProductInfo(10, 'Dude');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 11));

  // This is a function declaration. It can be hoisted to top of the page.
  function addNumbersDeclaration(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  // example of a function expression; expressions are NOT hoisted
  const addNumbersExpression = function(x: number, y: number): number {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(64, 5));
}

// Return Scalar (in course's Git repo)

// see addNumbersDeclaration (in course's Git repo)

console.log(`${prefix} return scalar value`);
//console.log(addNumbersDeclaration(7, 11));

const sampleProducts = [
  {
    id: 10,
    name: 'Pizza slice',
    icon: 'fas fa-pizza-slice',
  },
  {
    id: 20,
    name: 'Ice cream',
    icon: 'fas fa-ice-cream',
  },
  {
    id: 30,
    name: 'Cheese',
    icon: 'fas fa-cheese',
  },
];

function getProductNames(): string[] {
  return sampleProducts.map((p) => p.name);
}

console.log(`${prefix} return array`);
console.log(getProductNames());

// Return Types

// CREATE type ProductType

// Shorthand version auto-returns if arrow function is 1 line long:
function getProductById(id: number): ProductType | undefined {
  return sampleProducts.find((p) => id === p.id);
  //return sampleProducts.find(function (p) {
  //  return id === p.id;
  //});
}
/*
// Simplified arrow function to get product by id and return it:
const getProductById2 = (id: number): ProductType | undefined =>
  sampleProducts.find((p) => id === p.id);

  getProductById2(10);

console.log(`${prefix} return ProductType`);
console.table(getProductById(10));
*/

// Return void

function displayProducts(products: ProductType[]): void {
  const productNames = products.map((p) => {
    const name = p.name.toLowerCase();
    return name;
  });
  const msg = `Sample products include: ${productNames.join(', ')}`;
  console.log(`${prefix} return void`);
  console.log(msg);
}

displayProducts(sampleProducts);

// Lesson 5.7 - creating an optional paramter
const getRandomInt = (max: number) => Math.floor(Math.random() * max);

function createProduct(name: string, icon?: string): ProductType {
  const id = getRandomInt(1000);
  return {
    id,
    name,
    icon,
  };
}

console.log(`${prefix} Optional parameters`);
let pineapple = createProduct('pineapple', 'pine-apple.jpg');
let mango = createProduct('mango');
console.log(pineapple, mango);

// Default parameters

// modify getRandomInt()
/*
function createProductWithDefaults(
  name: string,
  icon: string = 'generic-fruit.jpg',
): ProductType {
  const id = getRandomInt();
  return {
    id,
    name,
    icon,
  };
}
*/
/*
console.log(`${prefix} Default parameters`);
pineapple = createProductWithDefaults('pineapple', 'pine-apple.jpg');
mango = createProductWithDefaults('mango');
console.log(pineapple, mango);
*/

// *** updateOutput()

// Rest parameters

function buildAddress(
  street: string,
  city: string,
  ...restOfAddress: string[]
) {
  const address = `${street}, ${city} ${restOfAddress.join(' ')}`;
  return address;
}

const someAddress = buildAddress(
  '1 lois lane',
  'smallville',
  'apt 101', // rest
  'area 51', // rest
  'mystery country', // rest
);

console.log(`${prefix} Rest parameters`);
console.log(someAddress);

// Destructuring parameters

function displayProduct({ id, name }: ProductType): void {
  console.log(`${prefix} Destructuring parameters`);
  console.log(`Product id=${id} and name=${name}`);
}

const prod = getProductById(10);
if (prod) {
  displayProduct(prod);
}

// ~~~ Math destructuring
// ~~~ layoutProducts() uses destructuring