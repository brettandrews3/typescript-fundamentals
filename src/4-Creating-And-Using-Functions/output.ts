const prefix = '🐉 ';

export default async function updateOutput(id: string) {
    //Ow, my toe! I STUBBED it on this function :D
}


// Learning sample section. Everything above this renders back to the page
runTheLearningSamples();

function runTheLearningSamples() {
    function displayProductInfo(id: number, name: string) {
        console.log(`${prefix} Typed parameters, son!`);
        console.log(`product id=${id} and name=${name}`);
    }

    displayProductInfo(10, 'White Russian');
    
}