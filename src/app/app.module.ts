import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HelloComponent } from './hello/hello.component';
import { PersonComponent } from './person/person.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertdialogboxComponent } from './alertdialogbox/alertdialogbox.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PracticeComponent } from './practice/practice.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgTempSwitchComponent } from './ng-temp-switch/ng-temp-switch.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HelloComponent,
    PersonComponent,
    ItemDetailComponent,
    InputOutputComponent,
    EventbindingComponent,
    RegistrationFormComponent,
    AlertdialogboxComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PracticeComponent,
    NgTempSwitchComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
