import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  constructor(private _vehicleService:VehicleService){}

  public vehicleform:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl()
  })
  
  submit(){
    console.log(this.vehicleform.value);
    this._vehicleService.createVehicles(this.vehicleform.value).subscribe(
      (data:any)=>{
        alert("created succefully");
      },
      (err:any)=>{
        alert(err.error);
      }
    )
    
  }
}
