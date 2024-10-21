import { Component } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent {
    
  mails:any=[];
  // completed:boolean=true;
  constructor(private _gmailService:GmailService){
    
  _gmailService.getGmail().subscribe(
    (data:any)=>{
      this.mails=data;

    },
    (err:any)=>{

     alert(err.error);
    }
  )

  }
}
