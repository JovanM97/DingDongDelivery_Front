import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/order';
import { PreviousOrdersService } from '../Services/previous-orders.service';

@Component({
  selector: 'app-previous-orders-screen',
  templateUrl: './previous-orders-screen.component.html',
  styleUrls: ['./previous-orders-screen.component.css'],
  providers: [PreviousOrdersService]
})
export class PreviousOrdersScreenComponent implements OnInit {

  orders: Array<Order>;

  constructor(private service : PreviousOrdersService, private router : Router) { }

  ngOnInit(): void {
    let username = localStorage["username"];
    this.service.SpecifiedUrl="Order/GetAllOrders";

    this.service.GetAllOrders(username).subscribe((data) => {

      this.orders = data;

    })
  }

}
