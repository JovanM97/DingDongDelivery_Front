import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditService extends UserNetworkService<User> {

  GetUserInfo(username: string)
  {
    return this.client.get<User>(this.BaseUri + this.SpecifiedUrl + '/' + username);
  }

  SaveUserInfo(id : number,user : User) 
  {
    return this.client.put(this.BaseUri + this.SpecifiedUrl + '/' + id, user );
  }
}
