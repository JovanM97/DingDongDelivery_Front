import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/order';
import { CurrentOrderService } from '../Services/current-order.service';

@Component({
  selector: 'app-current-order-screen',
  templateUrl: './current-order-screen.component.html',
  styleUrls: ['./current-order-screen.component.css'],
  providers: [CurrentOrderService]
})
export class CurrentOrderScreenComponent implements OnInit {

  order: Order;
  username: string;

  constructor(private service: CurrentOrderService, private router : Router) { }

  ngOnInit(): void {
    this.service.SpecifiedUrl="Order/GetCurrentOrder";
    this.username = localStorage["username"]

    this.service.GetCurrentOrder(this.username).subscribe((data) => {
      this.order = data;
      console.log(data);
    })

    this.service.SpecifiedUrl="Order/CheckOrderTime";
    this.service.CheckOrderTime(this.username).subscribe((data) => {
      if(data.msg == "Success"){
        alert("Your delivery has arrived!!!");
      }
      console.log(data);
    })
  }

}
