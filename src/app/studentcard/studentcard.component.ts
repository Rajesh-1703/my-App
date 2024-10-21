 import { Component } from '@angular/core';
import { StudentcardService } from '../studentcard.service';

@Component({
  selector: 'app-studentcard',
  templateUrl: './studentcard.component.html',
  styleUrls: ['./studentcard.component.css']
})
export class StudentcardComponent {
     
    students:any=[];
    item:string="";
    column:string="";
    order:string="";

  constructor(private _studentcardService:StudentcardService){
  
    _studentcardService.getstudentcard().subscribe(
    (data:any)=>{
      this.students=data;
    },
    (err:any)=>{
      alert(err.error);
    })
    
  }

 search(){
  this._studentcardService.getFilteredStundentcard(this.item).subscribe(
    (data:any)=>{
      this.students=data;
    },
    (err:any)=>{
      alert(err.error);
    }
  )

  
 }

 sort(){
  this._studentcardService.getSortedstudentcard(this.column,this.order).subscribe(
    (data:any)=>{
      this.students=data;
    },
    (err:any)=>{
      alert(err.error);
    }
  )
 }


 
}
