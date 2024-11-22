import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Models/product';
import { AddProductService } from '../Services/add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [AddProductService]
})
export class AddProductComponent implements OnInit {

  productForm : UntypedFormGroup;

  constructor(private service : AddProductService, private router : Router) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.productForm = new UntypedFormGroup({
      name: new UntypedFormControl('', Validators.required),
      price: new UntypedFormControl('', Validators.required),
      ingredients: new UntypedFormControl('', Validators.required),
    })
  }

  onSubmit() { 
    if(this.productForm.value.name == "" ||
      this.productForm.value.price == "" ||
      this.productForm.value.ingredients == "")
    {
      alert("Please fill all the field")
    } else{
      let product = new Product();
      product.name = this.productForm.value.name;
      product.price = this.productForm.value.price;
      product.ingredients = this.productForm.value.ingredients;

      this.service.SpecifiedUrl="Product/AddProduct";

      this.service.AddProduct(product).subscribe((data) => {
        if(data == "Success"){
          alert("Successfully added the product");
        } else if(data == "Name"){
          alert("Product with the same name already exists");
        }
      })


    }
  }



}
