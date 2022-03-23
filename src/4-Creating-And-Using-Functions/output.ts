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
}