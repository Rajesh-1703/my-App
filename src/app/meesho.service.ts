import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeeshoService {

  constructor(private _httpClient:HttpClient) { }
 
  getMeshoo():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products")
  }

  
}
