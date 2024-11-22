import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/order';
import { Product } from '../Models/product';
import { PreviousOrdersService } from '../Services/previous-orders.service';

@Component({
  selector: 'app-previous-order',
  templateUrl: './previous-order.component.html',
  styleUrls: ['./previous-order.component.css'],
  providers: [PreviousOrdersService]
})
export class PreviousOrderComponent implements OnInit {

  @Input() order: Order;
  public role : string;

  @Input() isDelivery: boolean;

  products: Product[] = [];
  
  buyer: string;
  delivery: string;

  username: string;
  
  constructor(private service : PreviousOrdersService, private router : Router) {
    if(localStorage["role"] != null){
      this.role = localStorage["role"]
    }
  }
  
  ngOnInit(): void {
    
    this.order.orderItems.forEach(element => {
      element.product.quantity = element.productQuantity;
      this.products.push(element.product)
    });

    this.service.SpecifiedUrl="Order/GetOrderUser";

    this.service.GetOrderUser(this.order.buyerId).subscribe((data) => {

      this.buyer = data.msg;

    }, (error) => {
      console.log(error);
      //this.buyer = error.text;
    })

    this.service.GetOrderUser(this.order.deliverymanId).subscribe((data) => {

      this.delivery = data.msg;

    }, (error) => {
      console.log(error);
      //this.buyer = error.text;
    })

  }

  accept() {
    this.service.SpecifiedUrl="Order/AcceptOrder";
    this.username = localStorage["username"]

    this.service.AcceptOrder(this.order.orderId, this.username).subscribe((data) => {
      console.log(data);
      if(data == "Success"){
        alert("Order accepted successfully");
        this.router.navigate(['current-order']);
      } else if(data == "Accepted"){
        alert("Order already accepted by other deliveryman")
      } else if(data == "Denied"){
        alert("You already have an order to deliver")
      }
      location.reload();
    }, (error) => {
      console.log(error);
      //location.reload();
    })
  }

  checkType(): string {
    if (this.role != null){
      if(this.role == 'ADMIN')
      return 'ADMIN'
      else if(this.role == 'BUYER')
      return 'BUYER'
      else if(this.role == 'DELIVERYMAN')
        return 'DELIVERYMAN'
      else
      return 'NONE'
    } else {
      //return 'NONE'
      return 'BUYER'
    }
  }

}
