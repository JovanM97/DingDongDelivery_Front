import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { Product } from '../Models/product';
import { TokenModel } from '../Models/tokenModel';
import { User } from '../Models/user';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends UserNetworkService<Order[]>{

  public static cart: Product[] = [];

  ConfirmOrder(id : number,order : Order) 
  {
    return this.client.put<TokenModel>(this.BaseUri + this.SpecifiedUrl + '/' + id, order );
  }

  GetUserInfo(username: string)
  {
    return this.client.get<User>(this.BaseUri + this.SpecifiedUrl + '/' + username);
  }
}
