// Lesson 6.3 - starting the file from scratch
class FoodProduct {
  /*
  // properties
  id = 0;
  name = '';
  icon = '';
  
  // constructor
  constructor(id: number, name: string, icon: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
  */

  // constructor (auto implemented properties) (simplified version of above comment block)
  // 'public' allows TypeScript to generate these properties
  constructor(public id: number, public name: string, public icon: string) {}

  // functions
}

let fp = new FoodProduct(1, 'Pizza slice', 'icon.jpg');

