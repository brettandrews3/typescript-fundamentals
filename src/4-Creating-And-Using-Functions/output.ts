const prefix = '🐉 ';
// TS Lesson 4.3 - Defining Functions (hoisting, fn expressions, fn declarations)

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
    const addNumbersExpression = function(x: number, y: number) {
        const sum: number = x + y;
        return sum;
    }

    console.log(`${prefix} Number expression: NOT hoisted`);
    console.log(addNumbersExpression(16, 17));
}