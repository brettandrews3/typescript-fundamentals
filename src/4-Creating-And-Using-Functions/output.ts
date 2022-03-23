const prefix = '🐉 ';

// In this export, 'id: string' refers to id in the div on index.html
export default async function updateOutput(id: string) {
  // TODO
}

// This will host the learning examples from Lesson 4:

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