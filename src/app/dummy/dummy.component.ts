import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent {

 public dummyform:FormGroup=new FormGroup({

  name:new FormControl(),
  class:new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
  fatherName:new FormControl(),
  email:new FormControl('',[Validators.required,Validators.email]),
  dob:new FormControl(),
  address:new FormGroup({
    addressLine:new FormControl(),
    city:new FormControl(),
    state:new FormControl('',[Validators.required]),
    pincode:new FormControl()

  }),
  company:new FormGroup({
    name:new FormControl(),
    package:new FormControl('',[Validators.min(10),Validators.max(25)])
  }),
  marks:new FormArray([])
 })

 get marksFormArray(){
  return this.dummyform.get('marks') as FormArray;
}

addmarks(){
this.marksFormArray.push(
  new FormGroup({
    class:new FormControl(),
    year:new FormControl(),
    percentage: new FormControl('',[Validators.min(0),Validators.max(100)]),
  })
)

}

submit(){
this.dummyform.get('')
  console.log(this.dummyform.value);
}

}
