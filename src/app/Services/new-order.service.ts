import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})

export class NewOrderService extends UserNetworkService<Product[]>{


  GetAllProducts(){
    return this.client.get<Product[]>(this.BaseUri + this.SpecifiedUrl);
  }
}
