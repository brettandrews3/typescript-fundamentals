export class Product {
    // Properties
    
    // Constructor
    constructor(public id: number, public name: string, public icon: string) { }

    // Functions
    
    // validate() makes sure that these properties have a value
    // Uses 'this' to access the properties generated in this class Product object
    // '!!' means the value must return 'true'
    validate(): boolean {
        return !!this.id && !!this.name && !!this.icon;
    }
}

