import { productsURL, FoodProduct, customersURL } from '../lib';

const prefix = '🐉 ';

interface HasId {
  id: number;
}

// Lesson 7.5 - Generics and Classes

// class GenericModel is similar to FoodModel near bottom of this file
class GenericModel<T extends HasId> {
  public items: T[] | undefined;
  constructor(public url: string) {}

  async getItems(): Promise<T[]> {
    this.items = await getList<T>(this.url);
    return this.items;
  }

  getItemById(id: number): T | undefined {
    return this.items ? this.items.find((p) => (id === p.id)) : undefined;
  }
}

// foodModel uses GenericModel and <FoodProduct> to generate an instance in 1 line
const foodModel = new GenericModel<FoodProduct>(productsURL);
//const customerModel = new GenericModel<Customer>(customersURL);

export default async function updateOutput(id: string = 'output') {
  //const products = await getProducts();
  //const products = await getList<FoodProduct>(productsURL);
  const products = await foodModel.getItems();

  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: FoodProduct[]): string {
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

async function getProducts(): Promise<FoodProduct[]> {
  const response: Response = await fetch(productsURL);
  const products: FoodProduct[] = await response.json();
  return products;
}

// getList() used in lesson 7.3 RE: functions. See async function getData ~ln 120
async function getList<T>(url: string): Promise<T[]> {
  const response: Response = await fetch(url);
  const items: T[] = await response.json();
  return items;
}

/************************************************
 * Learning sample code.
 ***********************************************/

runTheLearningSamples();

async function runTheLearningSamples() {
  function whatIsIt_number(arg: number) : number {
    return arg;
  }

  console.log(`${prefix} Generics Overview`);
  console.log(whatIsIt_number(11));

  function whatIsIt_string(arg: string) : string {
    return arg;
  }

  console.log(whatIsIt_string('Dude here'));

  function whatIsIt_any(arg: any) : any {
    return arg;
  }

  console.log(whatIsIt_any("Is it any wonder?"));
  console.log(whatIsIt_any(true));

  // <T> refers to <Type> here; we can assign type when declaring the variable
  function whatIsIt_typed<T>(arg: T): T {
    return arg;
  }

  // Assigning <Type><T> when we declare each variable here:
  let n: number = whatIsIt_typed<number>(11);
  let s: string = whatIsIt_typed<string>('lingonberry pancakes');
  let b: boolean = whatIsIt_typed<boolean>(true);

  console.log(n, s, b);

  //**Lesson 7.3: creating our own generic functions**

  interface Customer {
    id: number;
    name: string;
  }

  async function getData() {
    console.log(`${prefix} Generic Functions`);

    const products = await getList<FoodProduct>(productsURL);
    console.table(products);

    const customers = await getList<Customer>(customersURL);
    console.table(customers);
  }

  await getData();

  //**Lesson 7.4 - using generics with interfaces

  interface Model<T> {
    items: T[] | undefined;                     // return generic array | undefined if not there
    getItems: () => Promise<T[]>;
    getItemById: (id: number) => T | undefined;
  }

  // using 'implements' gives lightbulb option to implement interface automatically
  // This could easily implement <Customer> instead by swapping out the <Name> and (customerURL)
  class FoodModel implements Model<FoodProduct> {
    public items: FoodProduct[] | undefined;
    async getItems() : Promise<FoodProduct[]> {
      this.items = await getList<FoodProduct>(productsURL);
      return this.items;
    }
    getItemById(id: number) : FoodProduct | undefined {
      return this.items ? this.items.find((item) => (id = item.id)) : undefined
    }
  }

  const foodModel: FoodModel = new FoodModel();
  await foodModel.getItems();
  console.log(`${prefix} Generic Interface`);
  console.table(foodModel.items);

  const genericFoodModel = new GenericModel<FoodProduct>(productsURL);
  const genericCustomerModel = new GenericModel<Customer>(customersURL);
  await genericFoodModel.getItems();
  await genericCustomerModel.getItems();

  console.log(`${prefix} Generic Class`);
  console.table(genericFoodModel.items);
  console.table(genericCustomerModel.items);

  // Lesson 7.7 - Built-in Constraints

  const model : FoodModel = new FoodModel();
  await model.getItems();
  const foodItem: Readonly<FoodProduct | undefined> = model.getItemById(10);
  if (foodItem) {
    //foodItem.name = 'some name';
    //foodItem.icon = 'some icon';
  }
  
  const pear = { name: 'pear' };
  //const pearFood: FoodProduct = pear;
  const pearFood: Partial<FoodProduct> = pear;
}
