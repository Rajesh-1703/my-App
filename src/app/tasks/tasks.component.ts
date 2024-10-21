import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
name:string="";
names:string[]=[];

studentname:string="";
studentage:number=0;
students:any=[];


clgname:string="";
rank:number=0;
clgs:any=[];

 sub(){
this.names.push(this.name);

 }
 del(){
  this.names.pop();
 }

 create(){
    let student={
      name:this.studentname,
      age:this.studentage
    }
   this.students.push(student); 
 }
 clear(){
  this.students.pop();
 }

get(){
  let clg={
    name:this.clgname,
    r:this.rank
  }
  this.clgs.push(clg);

}
set(){
  this.clgs.pop();

}
}
