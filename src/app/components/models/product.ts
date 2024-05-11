export class product{
    productCode: string;
    name: string;
    unitPrice: number;
    description: string;
    category: string;
    quantity: number
   
    constructor() {
        this.productCode = '';
        this.name = '';
        this.unitPrice = 0.00;
        this.description = '';
        this.category = '';
        this.quantity = 1;
    }
}