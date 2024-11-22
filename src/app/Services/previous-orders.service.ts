import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { TokenModel } from '../Models/tokenModel';
import { User } from '../Models/user';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class PreviousOrdersService  extends UserNetworkService<Order[]>{

  GetAllOrders(id: string)
  {
    return this.client.get<Order[]>(this.BaseUri + this.SpecifiedUrl + '/' + id);
  }

  GetOrderUser(id: number)
  {
    return this.client.get<TokenModel>(this.BaseUri + this.SpecifiedUrl + '/' + id);
  }

  AcceptOrder(orderId: number, username: string)
  {
    return this.client.put<String>(this.BaseUri + this.SpecifiedUrl + '/' + orderId + '/' + username, username);
  }
}
