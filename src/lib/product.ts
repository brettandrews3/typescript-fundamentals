//Lesson 6.6: Extending Classes and Implementating Interfaces

import { Product } from './interfaces';

// class ProductBase is our building-block class
// abstract: this is a building block class. No direct creation of instances here
// implements: applies consistency of interface Product{} reqs: id, name, icon, desc?, bool validate()
abstract class ProductBase implements Product {
  // Properties
  
  // Constructor
  constructor(public id: number, public name: string, public icon: string) { }

  validate(): boolean {
    throw new Error('Not implemented');
  }
}

// extend the base class ProductBase, which applies guardrails of interface Product{}
export class FoodProduct extends ProductBase {
  
  // Functions
  
  // validate() makes sure that these properties have a value
  // Uses 'this' to access the properties generated in this class Product object
  // '!!' means the value must return 'true'
  validate(): boolean {
      return !!this.id && !!this.name && !!this.icon;
  }
}

// Just an extra example from Lesson 6.6
// Use 'extends', a JS term, to inherit from parent classes
// Use 'super' to allow child class to use its own constructor
class SportingGoodsProduct extends ProductBase {
  constructor(id: number, name: string, icon: string) {
    super(id, name, icon);
  }
}

