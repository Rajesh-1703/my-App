import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentcardService {

  constructor(private _httpClinet:HttpClient){}

  getstudentcard():Observable<any>{
    return this._httpClinet.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

   getFilteredStundentcard(item:string):Observable<any>{
  return this._httpClinet.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+item);
  }
  getSortedstudentcard(column:string,order:string):Observable<any>{
    return this._httpClinet.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
  }

  AddStudentcards(data:string){
    return this._httpClinet.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);

  }



}
