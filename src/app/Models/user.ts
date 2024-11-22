import { Order } from "./order";


export enum userType{
    ADMIN,
    DELIVERYMAN,
    BUYER, 
    NONE
}

export enum deliveryStatus{
    PROCESSING,
    ACCEPTED,
    DECLINED, 
    NONE
}

export class User{
    public userId: number;
    public username: string;
    public email : string;
    public password : string;
    public firstName : string;
    public lastName : string;
    public dateOfBirth : Date;
    public address: string;
    public userT: userType;
    public image: string;
    public isActive: boolean;

    public deliveryS: deliveryStatus;
    public hasOrder: boolean;
    public orders: Order[];

    public isDeleted: boolean;

    constructor() {
        this.userId = 0;
        this.username = "";
        this.email = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.dateOfBirth = new Date;
        this.address = "";
        this.userT = userType.NONE;
        this.image = "";
        
        this.isActive = false;
        this.deliveryS = deliveryStatus.NONE;
        this.hasOrder = false;
        this.isDeleted = false;
      }


}