import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../Models/order';
import { Product } from '../Models/product';
import { ProductOrder } from '../Models/productOrder';
import { User } from '../Models/user';
import { PaymentService } from '../Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [PaymentService]
})
export class PaymentComponent implements OnInit {

  list: Product[];
  user: User;
  order : Order;
  productOrder : ProductOrder[] = [];

  total: number;

  orderForm: UntypedFormGroup;

  constructor(private service : PaymentService, private router : Router) { }

  ngOnInit(): void {
    this.setForm();
    this.list = PaymentService.cart;

    let username = localStorage["username"];
    this.service.SpecifiedUrl="NewOrder/GetUserInfo";
    this.service.GetUserInfo(username).subscribe((data) => {
      console.log(data)
      this.user = data;

    })

    this.refreshCart();
  }

  confirmOrder(){
    this.service.SpecifiedUrl="NewOrder/ConfirmOrder";

    if(this.user.hasOrder){
      alert("You already have an order being delivered");
    } else{
      if(this.list.length > 0){
        this.order = new Order();
        this.order.buyerId = this.user.userId;
        this.order.orderAddress = this.user.address;
        this.order.orderComment = this.orderForm.value.comment;
        this.order.orderPrice = this.total;

        this.list.forEach(element => {
          let po = new ProductOrder;
          //po.product = element;
          po.productId = element.id;
          po.productQuantity = element.quantity;
          this.productOrder.push(po);
        });

        this.order.orderItems = this.productOrder;
        
        this.service.ConfirmOrder(this.user.userId, this.order).subscribe((data) => {
          if(data.msg == "Success"){
            alert("Your order has been registered");
            this.router.navigate(["current-order"]);
          } else if(data.msg == "Denied"){
            alert("You already have an order being delivered");
          }
        })

      }
    }
  }

  refreshCart(){
    this.total = 0;
    if(this.list != null){

      this.list.forEach(element => {
        this.total = this.total + element.price * element.quantity + 150;
      });
    }
  }

  setForm(){
    this.orderForm = new UntypedFormGroup({
      comment: new UntypedFormControl('', Validators.required)
  
    })
  }

}
