import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User, userType } from '../Models/user';
import { TokenModel } from '../Models/tokenModel';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserNetworkService<T> {

  BaseUri : string = environment.apiURL;
  SpecifiedUrl = "";
  constructor(protected client : HttpClient) { }

  getAll(): Observable<T[]> {
    return this.client.get<T[]>(this.BaseUri + this.SpecifiedUrl);
  }

  get(): Observable<T> {
    return this.client.get<T>(this.BaseUri + this.SpecifiedUrl);
  }

  getById(id: number): Observable<T> {
    return this.client.get<T>(this.BaseUri + this.SpecifiedUrl + '/${id}');
  }

  getByName(name: string): Observable<T> {
    return this.client.get<T>(this.BaseUri + this.SpecifiedUrl + '/${name}');
  }

  put(id: number, inputData: T): Observable<T> {
    return this.client.put<T>(this.BaseUri + this.SpecifiedUrl + '/${id}', inputData);
  }

  post(inputData: any): Observable<T> {
    return this.client.post<T>(this.BaseUri + this.SpecifiedUrl, inputData);
  }

  delete(id: number) {
    return this.client.delete(this.BaseUri + this.SpecifiedUrl + '/${id}');
  }

}
