import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Models/product';
import { NewOrderService } from '../Services/new-order.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-new-order-screen',
  templateUrl: './new-order-screen.component.html',
  styleUrls: ['./new-order-screen.component.css'],
  providers: [NewOrderService]
})
export class NewOrderScreenComponent implements OnInit {

  products: Product[];
  cart: Product[] = [];

  @ViewChild(ShoppingCartComponent ) child !:any ;

  constructor(private service : NewOrderService, private router : Router) { }


  setForm(){

  }

  ngOnInit(): void {
    this.service.SpecifiedUrl="NewOrder/GetAllProducts";
    this.service.GetAllProducts().subscribe((data) => {
      this.products = data;
    })
  }

  addProduct(product : Product){
    console.log(product);
    this.cart.push(product);
    this.child.refreshCart();
    //location.reload();
  }

}
