import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {

  h:number=0;
  w:number=0;
  r:number=0;

  cal(){
    this.r=Math.floor((this.w)/((this.h/100)*(this.h/100)))
   
   
   
   }

}
