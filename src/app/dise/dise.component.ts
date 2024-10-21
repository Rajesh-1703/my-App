import { Component } from '@angular/core';

@Component({
  selector: 'app-dise',
  templateUrl: './dise.component.html',
  styleUrls: ['./dise.component.css']
})
export class DiseComponent {
  rndlnt:number=0;

 roll(){
  this.rndlnt=Math.floor(Math.random()*6)+1
 } 

}
