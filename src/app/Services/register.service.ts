import { Injectable } from '@angular/core';
import { TokenModel } from '../Models/tokenModel';
import { User } from '../Models/user';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends UserNetworkService<User>{

  Register(user: User)
  {
    return this.client.post<TokenModel>(this.BaseUri + this.SpecifiedUrl, user);
  }



  
}
