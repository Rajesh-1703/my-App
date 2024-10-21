import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
   isvalid:boolean=false;

  age:number=20;
   
  ages:number[]=[10,20,30,40];

  states:string[]=["andra","telangana","ban"];

  users:any=[
    {name:'aaa',age:20},
    {name:'bbb',age:30},
    {name:'ccc',age:30}
  ]

    products:any=[
     {name:'pen',price:10,rating:3.5},
     {name:'laptop',price:50000,rating:4.7},
     {name:'mobile',price:25000,rating:3}
    ]
}
