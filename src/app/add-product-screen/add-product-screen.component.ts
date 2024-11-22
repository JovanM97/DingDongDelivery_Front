import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/product';
import { AddProductService } from '../Services/add-product.service';

@Component({
  selector: 'app-add-product-screen',
  templateUrl: './add-product-screen.component.html',
  styleUrls: ['./add-product-screen.component.css'],
  providers: [AddProductService]
})
export class AddProductScreenComponent implements OnInit {

  products: Array<Product>;

  constructor(private service : AddProductService, private router : Router) { }

  ngOnInit(): void {
    this.service.SpecifiedUrl="Product/GetAllProducts";

    this.service.GetAllProducts().subscribe((data) => {
      this.products = data;
    })
  }

}
