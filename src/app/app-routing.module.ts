import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BashboardComponent } from './bashboard/bashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindinbgComponent } from './data-bindinbg/data-bindinbg.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DiseComponent } from './dise/dise.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TasksComponent } from './tasks/tasks.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';
import { AmazonComponent } from './amazon/amazon.component';
import { OfficeComponent } from './office/office.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MeeshoComponent } from './meesho/meesho.component';
import { GmailComponent } from './gmail/gmail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatebankComponent } from './createbank/createbank.component';
import { StudentcardComponent } from './studentcard/studentcard.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { DummyComponent } from './dummy/dummy.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'bashboard',canActivate:[AuthenticationGuard],component:BashboardComponent,children:[
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'databinding',component:DataBindinbgComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'rectangular',component:RectangularComponent},
  {path:'circle',component:CircleComponent},
  {path:'BMI',component:BMIComponent},
  {path:'dise',component:DiseComponent},
  {path:'directives',component:DirectivesComponent},
 {path:'pipes',component:PipesComponent},
 {path:'tasks',component:TasksComponent},
 {path:'flipkart',component:FlipkartComponent},
 {path:'higher-order',component:HigherOrderComponent},
 {path:'amazon',component:AmazonComponent},
 {path:'office',component:OfficeComponent},
 {path:'vehicle',component:VehicleComponent},
 {path:'accounts',component:AccountsComponent},
 {path:'meesho',component:MeeshoComponent},
 {path:'gmail',component:GmailComponent},
 {path:'createvehicle',component:CreateVehicleComponent},
 {path:'createbank',component:CreatebankComponent},
 {path:'studentcard',component:StudentcardComponent},
 {path:'create-user',component:CreateUserComponent},
 {path:'dummy',component:DummyComponent},
 {path:'vehicle-details/:id',component:VehicleDetailsComponent},
 {path:'account-details/:id',component:AccountDetailsComponent}
 ]},
 {path:'',component:LoginComponent},
 {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
