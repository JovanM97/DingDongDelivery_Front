import { Injectable } from '@angular/core';
import { LoginModel } from '../Models/loginModel';
import { User } from '../Models/user';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends UserNetworkService<User>{

  GetUserInfo(username: string)
  {
    return this.client.get<User>(this.BaseUri + this.SpecifiedUrl + '/' + username);
  }
}
