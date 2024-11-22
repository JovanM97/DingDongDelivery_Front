import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class AddProductService extends UserNetworkService<Product>{

  AddProduct(product: Product)
  {
    return this.client.post<String>(this.BaseUri + this.SpecifiedUrl, product);
  }

  GetAllProducts(){
    return this.client.get<Product[]>(this.BaseUri + this.SpecifiedUrl);
  }
}
