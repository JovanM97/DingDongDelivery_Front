import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class VerificationService  extends UserNetworkService<User[]>{

  GetAllUsers()
  {
    return this.client.get<User[]>(this.BaseUri + this.SpecifiedUrl);
  }

  AcceptUser(id: number)
  {
    return this.client.get<string>(this.BaseUri + this.SpecifiedUrl + '/' + id);
  }

  RejectUser(id: number)
  {
    return this.client.get<string>(this.BaseUri + this.SpecifiedUrl + '/' + id);
  }
}
