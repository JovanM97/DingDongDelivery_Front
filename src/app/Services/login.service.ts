import { EventEmitter, Injectable } from '@angular/core';
import { LoginModel } from '../Models/loginModel';
import { TokenModel } from '../Models/tokenModel';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends UserNetworkService<LoginModel>{

  public Admin:EventEmitter<boolean> = new EventEmitter();
  public Deliveryman:EventEmitter<boolean> = new EventEmitter();
  public Buyer:EventEmitter<boolean> = new EventEmitter();

  Login(user: LoginModel)
  {
    return this.client.post<TokenModel>(this.BaseUri + this.SpecifiedUrl, user);
  }

  socialLogin(formdata) {
    return this.client.post<String[]>(this.BaseUri + this.SpecifiedUrl, formdata);
  }

  checkTheRole()
  {
    let flag=false;
    this.SpecifiedUrl="Account/checkToken"
     this.client.get(this.BaseUri + this.SpecifiedUrl).subscribe(
      (data) => {
       flag=data as boolean;
       this.emitRole(flag);
      },
      (error) => {
        console.log("greska")  
      },
      () => {
        console.log('complete');
      });
      return flag;
    }

    private emitRole(flag: boolean) {
      let role = localStorage.getItem('role');

        switch(role)
        {
        case 'ADMIN':
          this.Admin.emit(true);
          this.Deliveryman.emit(false);
          this.Buyer.emit(false);
          return;
        case 'DELIVERYMAN':
          this.Admin.emit(false);
          this.Deliveryman.emit(true);
          this.Buyer.emit(false);
          return;
        case 'BUYER':
          this.Admin.emit(false);
          this.Deliveryman.emit(false);
          this.Buyer.emit(true);
            return;
        default:
          this.Admin.emit(false);
          this.Deliveryman.emit(false);
          this.Buyer.emit(false);
          return;
      }
    }

}
