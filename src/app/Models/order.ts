import { Time } from "@angular/common";
import { Product } from "./product";
import { ProductOrder } from "./productOrder";
import { User } from "./user";

export class Order {
    public orderId: number;
    public orderItems: ProductOrder[];
    public orderAddress: string;
    public orderPrice: number;
    public orderComment: string;
    public buyer: User;
    public buyerId: number;
    public deliverymanId: number;
    public isAccepted: boolean;
    public timeTillDelivery: Date;
    public isDelivered: boolean;

    constructor() {
        this.orderId = 0;
        this.orderItems = [];
        this.orderAddress = "";
        this.orderPrice = 0;
        this.orderComment = "";
        this.buyer = new User;
        this.isAccepted = false;
        this.timeTillDelivery = new Date; //currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        this.isDelivered = false;
      }
}