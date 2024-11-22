import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/product';
import { PaymentService } from '../Services/payment.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [PaymentService]
})
export class ShoppingCartComponent implements OnInit {

  @Input() cart: Product[];
  total: number = 0;

  constructor(private service : PaymentService, private router : Router) { }

  ngOnInit(): void {
    if(this.cart != null){

      this.cart.forEach(element => {
        this.total = this.total + element.price * element.quantity;
      });
    }
  }

  RemoveProduct(p : Product){
    var index = this.cart.indexOf(p);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    this.refreshCart()
  }

  refreshCart(){
    this.total = 0;
    if(this.cart != null){

      this.cart.forEach(element => {
        this.total = this.total + element.price * element.quantity;
      });
    }
  }

  GoToPayment() {
    
    if(this.cart.length > 0){
      PaymentService.cart = this.cart;
      console.log(this.cart)
      this.router.navigate(['payment'])
    }else{
      alert("Shopping cart is empty")
    }
  }

}
