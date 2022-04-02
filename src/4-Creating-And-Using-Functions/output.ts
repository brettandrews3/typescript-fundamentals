const prefix = '🐉 ';
// TS Lesson 4.4 - Return Values (type ProductType, undefined, void return type)

// TS Lesson 4.4: we're creating new type ProductType:
type ProductType = {
    id: number,
    name: string,
    icon?: string;
};

export default async function updateOutput(id: string) {
    //Ow, my toe! I STUBBED it on this function :D
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
            name: 'Cheese',
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
        return sampleProducts.find(p => id == p.id);
    }

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
}