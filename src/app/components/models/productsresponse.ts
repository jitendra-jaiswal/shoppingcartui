import { product } from "./product";

export class productresponse{
    products: product[];
    isSuccess: boolean;
    errorMessage: string;

    constructor(){
        this.products = [];
        this.isSuccess = false;
        this.errorMessage = ''
    }
}