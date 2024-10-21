import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) {}

    getAccounts(){
      
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
    
       
      }
      
      getAccount(id:string){
      
        return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
      
         
        }

      getFliteredAccounts(term:string):Observable<any>{
        return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
      }
      
      getSotedAccounts(column:string,order:string):Observable<any>{
        return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
      }

      getPagedAccounts(page:number):Observable<any>{
        return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);
      }

      AddAccounts(data:string):Observable<any>{
        return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
      
      }
      DeleteAccounts(id:string){
        return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
      }
    }

   

