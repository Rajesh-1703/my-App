import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
   accounts:any=[];
   term:string='';
    column:string="";
    order:string="";
    page:number=0;
  constructor(private _accountsService:AccountsService){
     
_accountsService.getAccounts().subscribe(
  (data:any)=>{
    this.accounts=data;
    
  },
  (err:any)=>{
    alert("server error");
  }
)

  }
 search(){
  this._accountsService.getFliteredAccounts(this.term).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert(err.error);
    }
  )
 }

sort(){
  this._accountsService.getSotedAccounts(this.column,this.order).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert(err.error);
    }
  )
}
paged(){
  this._accountsService.getPagedAccounts(this.page).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert(err.error);
    }
  )
}

del(id:string){
  this._accountsService.DeleteAccounts(id).subscribe(
    (data)=>{
      alert("deleted sucessfully");
    location.reload();
    },
  )
}
}
