import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindinbg',
  templateUrl: './data-bindinbg.component.html',
  styleUrls: ['./data-bindinbg.component.css']
})
export class DataBindinbgComponent {

  age:number=20;
  name:string="raj";
  phone:string="+91 ";
  isInvaild:boolean=true;

    
 submit(){
  alert("submit clicked");
}
   typing(){
    alert("typing")

   } 


}

