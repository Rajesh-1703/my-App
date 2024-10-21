import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-bashboard',
  templateUrl: './bashboard.component.html',
  styleUrls: ['./bashboard.component.css']
})
export class BashboardComponent {
constructor(private _router:Router){}
  logout(){
    sessionStorage.removeItem("token");
    //go to login page
    this._router.navigateByUrl("/login")
  }

}
