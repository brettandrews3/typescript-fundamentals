import { productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType = {
  id: number,
  name: string,
  icon?: string
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
  const addNumbersExpression = function(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(64, 5));
}