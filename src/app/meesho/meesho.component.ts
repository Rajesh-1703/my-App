import { Component } from '@angular/core';
import { MeeshoService } from '../meesho.service';

@Component({
  selector: 'app-meesho',
  templateUrl: './meesho.component.html',
  styleUrls: ['./meesho.component.css']
})
export class MeeshoComponent {
  
  items:any=[];

  constructor(private _meeshoService:MeeshoService){
 _meeshoService.getMeshoo().subscribe(
      (data:any)=>{
          this.items=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )

  }


}

