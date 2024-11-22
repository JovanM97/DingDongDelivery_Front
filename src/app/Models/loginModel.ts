export class LoginModel{
    public email: string;
    public password: string;
    IdToken:string;

    constructor(email: string, password: string) { 
         
      this.email=email;
      this.password=password;
     
      }
}