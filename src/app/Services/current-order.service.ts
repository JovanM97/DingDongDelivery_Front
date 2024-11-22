import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { TokenModel } from '../Models/tokenModel';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentOrderService extends UserNetworkService<Order>{

  GetCurrentOrder(id: string)
  {
    return this.client.get<Order>(this.BaseUri + this.SpecifiedUrl + '/' + id);
  }

  GetAllDeliveryOrders()
  {
    return this.client.get<Order[]>(this.BaseUri + this.SpecifiedUrl);
  }

  CheckOrderTime(id: string)
  {
    return this.client.get<TokenModel>(this.BaseUri + this.SpecifiedUrl + '/' + id);
  }

}
