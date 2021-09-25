import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotCustomerIDComponent } from './forgot-customer-id/forgot-customer-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { LoginComponent } from './login/login.component';
import { CreateSavingsAccountComponent } from './create-savings-account/create-savings-account.component';
import { AboutbankComponent } from './aboutbank/aboutbank.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ForgotCustomerIDComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    LoginComponent,
    CreateSavingsAccountComponent,
    AboutbankComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
