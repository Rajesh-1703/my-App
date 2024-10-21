import { Component } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent {
  employeeName:string='';
  employeeExperience:number=0;
  employeepackage:number=0;
  employeerole:string='';
  totalitems:number=0;
  employeesearchName:string='';

  employees = [
    { name: 'sandeep', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'amar', experience: 5, package: 1300000, role: 'UIDeveloper' },
]
dispaly(){

}
create(){
  let employee={
   name:this.employeeName,
   experience:this.employeeExperience,
   package:this.employeepackage,
   role:this.employeerole,
   
  }
  this.employees.push(employee);
}
hike(){
this.employees=this.employees.map((employee)=>{
  employee.package=employee.package+employee.package*20/100;
  return(employee);
})

}

packLH(){
  this.employees.sort((a,b)=>a.package-b.package);
}

packHL(){
  this.employees.sort((a,b)=>b.package-a.package);
}
expLH(){
  this.employees.sort((a,b)=>a.experience-b.experience);
}
expHL(){
  this.employees.sort((a,b)=>b.experience-a.experience);
}
totalCost(){
var total=this.employees.reduce((sum,employee)=>sum+employee.package,0);
alert("total expenditure "+total);
}
totalEmp(){
  this.totalitems=(this.employees.length);
//  var totalitems=(this.employees.length);

}

search(){

  this.employees=this.employees.filter(employee=>employee.name.includes(this.employeesearchName));
}

del(i:number){
  this.employees.splice(i,1);
}

}