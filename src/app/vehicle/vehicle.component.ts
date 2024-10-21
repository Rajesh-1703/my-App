import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  term:string="";
  column:string="";
  order:string="";
 page:number=0;




  constructor(private _vehicleService: VehicleService){

   _vehicleService.getVehicles().subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("internal server error")
    }
   )
  }
  serch(){
    this._vehicleService.getfilteredvehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

  sort(){
    this._vehicleService.getSortedvahicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
    (err:any)=>{
      alert(err.error);
    }
    )
  }

  pagenation(){
    this._vehicleService.getPegedVehicles(this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert(err.error);
      }
    )
  }

  del(id:string){
    this._vehicleService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("delete sucessfully!!!!");
        location.reload();
      },
      (err:any)=>{
           alert(err.error);
      })
    
  }

}
