import { productsURL } from "../lib";

const prefix = '🐉 ';
// TS Lesson 4.10 - Parameter Destructuring (desctructured parameters at bottom)

// TS Lesson 4.4: we're creating new type ProductType:
type ProductType = {
    id: number,
    name: string,
    icon?: string;
};

// TS Lesson 4.5
// This async function waits for getProducts() to run, using const products to do so
// 'output' calls to the div on the page with that id, then lays out products in HTML
// layoutProducts() below turns the array of products into HTML. Finally, const html
// executes layoutProducts() from below, passing in its paramter: 'products'.
// if statement is guard logic, insuring we have both output && html to proceed.
export default async function updateOutput(id: string) {
    const products = await getProducts();
    const output = document.querySelector(`#${id}`);
    const html = layoutProducts(products);

    if(output && html) {
        output.innerHTML = html;
    }
}

// TS Lesson 4.5: function layoutProducts() helps us get the data, display to webpage.
// It's used by updateOutput() above to turn product array into HTML:
// The card defined by <span class...> lays out the product info, then const cardHtml
// puts each card's span inside the <li> item to display to the browser.
// At the end, we return the unordered list <ul> in productsHtml.

// TS Lesson 4.10: destructure the .map() parameters, as {id, name, icon} are defined
// in 'products', which is set by type 'ProductType' and its id, name, icon settings on ln 7.
function layoutProducts(products: ProductType[]) {
    const items = products.map(({id, name, icon}) => {
        const productHtml = `
        <span class="card-id">#${id}</span>
            <i class="card-icon ${icon} fa-lg"></i>
        <span class="card-name">${name}</span>
        ;`
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

// TS Lesson 4.5: creating function getProducts() to display products on the page:
// 'response' = what returns from our async call to an API using fetch()
// Function is async => fetch() has an await statement && function has async statement
// Define return type as 'Response' to make it extra explicit (productsURL has Response, too)
// 'products' is async bc json() is async because it's returning a <Promise>
// Define return type on getProducts() to insure function returns what I expect, even if fn changes
async function getProducts(): Promise<ProductType[]> {
    const response: Response = await fetch(productsURL);
    const products: ProductType[] = await response.json();
    return products;
}

// Learning sample section. Everything above this renders back to the page
runTheLearningSamples();

// runTheLearningSamples() is a hoisted function
function runTheLearningSamples() {
    function displayProductInfo(id: number, name: string) {
        console.log(`${prefix} Typed parameters, son!`);
        console.log(`product id=${id} and name=${name}`);
    }

    displayProductInfo(10, 'White Russian');

    // These console logs work because the functions used are hoisted to the top:
    console.log(`${prefix} Function declarations: ARE hoisted`);
    console.log(addNumbersDeclaration(7, 14));

    // addNumbersDeclaration enforces number return type twice:
    // 1) set parameters x and y as type number
    // 2? const sum also has a return type of number
    function addNumbersDeclaration(x: number, y: number) {
        const sum: number = x + y;
        return sum;
    }
    
    // Function expressions like this one are not hoisted:
    const addNumbersExpression = function(x: number, y: number): number {
        const sum: number = x + y;
        return sum;
    }

    console.log(`${prefix} Number expression: NOT hoisted`);
    console.log(addNumbersExpression(16, 17));

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
            name: 'Royale with cheese',
            icon: 'fas fa-cheese',
          },
    ];

    // Use map() for arrays; get every item from array by using
    // 'p' for product, then map out the name of the product ( => p.name ):
    function getProductNames() {
        return sampleProducts.map((p) => p.name);
    }

    console.log(`${prefix} Return of the Array`);
    console.log(getProductNames());

    // This function takes in id that is a number and return is of ProductType | undefined.
    // undefined is needed because find() may possibly not find that object.
    // It returns array sampleProducts with .find(), where 'p' is each item
    // in the array. 'p' looks for the id where it is the product id (p.id).
    function getProductById(id: number): ProductType | undefined {
        return sampleProducts.find(p => id == p.id); // 1 ln arrow fn has implied 'return'

        /* Longhand translation for above arrow function:
        return sampleProducts.find(function (p) {
            return id === p.id;
        });  */
    }

    /*
    // Lesson 4.6: convert getProductById() to arrow function:
    const getProductById2 = (id: number): ProductType | undefined =>
        sampleProducts.find((p) => id === p.id);

        getProductById2(70);
    */

    console.log(`${prefix} returning ProductType`);
    console.log(getProductById(10));

    // void return type
    /* displayProducts() here takes in parameter products, which are type ProductType array.
        The return type is void. The function creates productNames as the products array mapped out.
        Again, 'p' represents items in the array. Each item 'p' is assigned to new variable name,
        which translates to 'product name is lower case'. Return the name to the function.

        Finally, declare const msg to deliver the string: 'Sample products include (list each product name,
        joining them together with comma and space for readability). Print the result msg to the console.
    */

    // Lesson 4.6: The arrow function here takes the array of products 'p', maps the array to
    // const 'name', and returns just the names of said products array. The arrow function says, 
    // "Return whatever this function in {} does."
    function displayProducts(products: ProductType[]) : void {
        const productNames = products.map(p => {
            const name = p.name.toLowerCase();
            return name;
        });
        const msg = `Sample products include: ${productNames.join(', ')}`;
        console.log(`${prefix} return void`);
        console.log(msg);
    }

    // displayProducts is declared just above. sampleProducts defined at ln 49 in this commit.
    displayProducts(sampleProducts);

    // Lesson 4.7
    // Lesson 4.8
    // By setting max: number = 1000, we make the argument default && optional, meaning
    // const 'id' below could remove the number from its getRandomInt() and work the same.
    // Lesson 4.10: apply destructured parameters to pull functions directly from Math:
    const { floor, random } = Math;
    const getRandomInt = (max: number = 1000) => floor(random() * max);

    function createProduct(name: string, icon?: string,): ProductType {
        const id = getRandomInt(1000);
        return {
            id, 
            name,
            icon
        };
    }

    // Lesson 4.7: Using optional parameters, pineapple applies the icon string given in its
    // declaration: 'pine-apple.jpg'. Since the icon is optional in this function, mango has
    // an icon value of 'undefined'.
    console.log(`${prefix} Optional parameters`);
    let pineapple = createProduct('pineapple', 'pine-apple.jpg');
    let mango = createProduct('mango');
    console.log(pineapple, mango);

    // Lesson 4.8: recreating createProduct from 4.7 but with default values
    function createProductWithDefaults(name: string, icon: string = 'generic-fruit.jpg'): ProductType {
        const id = getRandomInt();
        return {
            id, 
            name,
            icon
        };
    }

    // Lesson 4.8: When we call pineapple and mango to the console log with default parameters,
    // pineapple prints with its 'pine-apple.jpg' assigned below, while mango appears with the
    // default icon in the function: 'generic-fruit.jpg'.
    console.log(`${prefix} Default parameters`);
    pineapple = createProductWithDefaults('pineapple', 'pine-apple.jpg');
    mango = createProductWithDefaults('mango');
    console.log(pineapple, mango);


    // Lesson 4.9: Rest parameters
    // The ellipsis says that any parameters after street and city here are 'restOfAddress'.
    function buildAddress(
        street: string, 
        city: string, 
        ...restOfAddress: string[] 
        ) {
        console.table(restOfAddress);
        const address = `${street} ${city} 
        ${restOfAddress.join(' - ')} `;   // restOfAddress now appears on next console line
        return address;
    }

    const someAddress = buildAddress(
        '1 lois lane',      // street
        'smallville',       // city
        'apt 101',          // rest arg[0]
        'area 51',          // rest arg[1]
        'mystery country',  // rest arg[2]
    );

    console.log(`${prefix} Rest parameters`);
    console.log(someAddress);

    
    // Lesson 4.10: Parameter destructuring
    // In displayProduct() here, we can pass in ( {id, name} ) instead of passing in 
    // variable 'product' because these parameters are part of return type ProductType,
    // which I've specified below.
    function displayProduct({id, name,}: ProductType): void {
        console.log(`${prefix} Destructuring parameters`);
        console.log(`Product id=${id} and name=${name}`);
    }

    const prod = getProductById(10);
    if(prod) {
        displayProduct(prod);
    }
}