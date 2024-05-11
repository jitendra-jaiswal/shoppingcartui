export class cartItem {
    productCode: string;
    unitPrice: number;
    quantity: number;
    discount: number;
    discountCode: string;
    specialMessage: string;
    totalAmountBeforeDiscount: number;

    constructor(){
        this.productCode = '';
        this.unitPrice = 0;
        this.quantity = 0;
        this.discount = 0;
        this.discountCode = '';
        this.specialMessage = '';
        this.totalAmountBeforeDiscount = 0;
    }
}

export class cartmodel{
    cartItems: cartItem[];
    totalAmount: number;
    totalDiscount: number;
    totalNetAmount: number;
    isSuccess: boolean;
    errorMessage: string;

    constructor(){
        this.cartItems = [];
        this.totalAmount = 0;
        this.totalDiscount = 0;
        this.totalNetAmount = 0;
        this.isSuccess = false;
        this.errorMessage = '';
    }
}