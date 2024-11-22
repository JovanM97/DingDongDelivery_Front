import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product
  @Input() isShopping: boolean

  productForm: UntypedFormGroup;

  @Output("addProduct") addProduct: EventEmitter<any> = new EventEmitter();

  constructor() { }

  setForm(){
    this.productForm = new UntypedFormGroup({
      quantity: new UntypedFormControl('', Validators.required)
  
    })
  }

  ngOnInit(): void {
    this.setForm();
  }

  AddProductToCart() {
    
  }

  onSubmit() {
    if(this.productForm.value.quantity > 0){

      this.product.quantity = this.productForm.value.quantity;
      this.addProduct.emit();
    }
  }

}
