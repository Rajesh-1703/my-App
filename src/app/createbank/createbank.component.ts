import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createbank',
  templateUrl: './createbank.component.html',
  styleUrls: ['./createbank.component.css']
})
export class CreatebankComponent {

  constructor(private _accountsService:AccountsService){}

public bankform:FormGroup=new FormGroup({

  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),
  profie_picture:new FormControl(),
  id:new FormControl()


})
 
submit(){
  console.log(this.bankform.value);
  this._accountsService.AddAccounts(this.bankform.value).subscribe(
    (data:any)=>{
      alert("submitted sucefully");

    },
    (err:any)=>{
      alert(err.error);
    }
  )


}


}
