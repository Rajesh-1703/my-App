import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangular',
  templateUrl: './rectangular.component.html',
  styleUrls: ['./rectangular.component.css']
})
export class RectangularComponent {
  w:number=0;
  l:number=0;
  r:number=0;
  area(){
    this.r=(this.w*this.l)
  }
  peri(){
    this.r=2*(this.w+this.l)
  }

}
