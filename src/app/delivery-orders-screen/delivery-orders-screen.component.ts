import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/order';
import { CurrentOrderService } from '../Services/current-order.service';

@Component({
  selector: 'app-delivery-orders-screen',
  templateUrl: './delivery-orders-screen.component.html',
  styleUrls: ['./delivery-orders-screen.component.css'],
  providers: [CurrentOrderService]
})
export class DeliveryOrdersScreenComponent implements OnInit {

  orders: Array<Order>;

  constructor(private service : CurrentOrderService, private router : Router) { }

  ngOnInit(): void {

    this.service.SpecifiedUrl="Order/GetAllDeliveryOrders";

    this.service.GetAllDeliveryOrders().subscribe((data) => {

      this.orders = data;

    })
  }


}
