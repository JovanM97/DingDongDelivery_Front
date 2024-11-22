import { Order } from "./order";
import { ProductOrder } from "./productOrder";

export class Product{
    public id: number;
    public name : string;
    public price : number;
    public quantity : number;
    public ingredients: string;
    public isDeleted : boolean;
    public orders: ProductOrder[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.price = 0;
        this.quantity = 0;
        this.ingredients = "";
        this.isDeleted = false;
      }
}