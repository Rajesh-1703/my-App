import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  n1:number=0;
  n2:number=0;
   r:number=0;

  cal(){
    this.r=this.n1+this.n2;
   
  }
  sub(){
    this.r=this.n1-this.n2
  }
  mul(){
    this.r=this.n1*this.n2
  }
  div(){
    this.r=this.n1/this.n2
  }
}
