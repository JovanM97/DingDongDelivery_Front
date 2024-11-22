import { Order } from "./order";
import { Product } from "./product";

export class ProductOrder{
    public productId: number;
    public productQuantity: number;
    public product : Product;
    public orderID : number;
    public order : Order;

}