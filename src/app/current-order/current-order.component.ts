import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Order } from '../Models/order';
import { Product } from '../Models/product';
import { CurrentOrderService } from '../Services/current-order.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css'],
  providers: [CurrentOrderService]
})
export class CurrentOrderComponent implements OnInit {

  public role : string;
  @Input() order: Order;
  username: string;

  products: Product[] = [];

  buyer: string;
  delivery: string;

  private subscription: Subscription;
  
  public dateNow = new Date();
  public dDay = new Date('Jul 13 2022 23:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;


  constructor(private service: CurrentOrderService, private router : Router) {
    if(localStorage["role"] != null){
      this.role = localStorage["role"]
    }
  }

  ngOnInit(): void {
    this.order.orderItems.forEach(element => {
      element.product.quantity = element.productQuantity;
      this.products.push(element.product)
    });
    console.log(this.order.timeTillDelivery)
    this.dDay =  new Date(this.order.timeTillDelivery);
    this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
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

  private allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
