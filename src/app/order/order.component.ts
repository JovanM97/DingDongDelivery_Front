import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/order';
import { CurrentOrderService } from '../Services/current-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [CurrentOrderService]
})
export class OrderComponent implements OnInit {

  order: Order;

  constructor(private service: CurrentOrderService, private router : Router) { }

  ngOnInit(): void {
  }

  AcceptOrder() {
    this.service.SpecifiedUrl="Order/AcceptOrder";

    
  }

}
