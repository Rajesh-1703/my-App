import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BashboardComponent } from './bashboard/bashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindinbgComponent } from './data-bindinbg/data-bindinbg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { MeeshoComponent } from './meesho/meesho.component';
import { GmailComponent } from './gmail/gmail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreatebankComponent } from './createbank/createbank.component';
import { StudentcardComponent } from './studentcard/studentcard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DummyComponent } from './dummy/dummy.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindinbgComponent,
    CalculatorComponent,
    RectangularComponent,
    CircleComponent,
    BMIComponent,
    DiseComponent,
    DirectivesComponent,
    PipesComponent,
    TasksComponent,
    FlipkartComponent,
    HigherOrderComponent,
    AmazonComponent,
    OfficeComponent,
    VehicleComponent,
    AccountsComponent,
    MeeshoComponent,
    GmailComponent,
    CreateVehicleComponent,
    CreatebankComponent,
    StudentcardComponent,
    CreateUserComponent,
    DummyComponent,
    VehicleDetailsComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
