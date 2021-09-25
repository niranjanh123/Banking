import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutbankComponent } from './aboutbank/aboutbank.component';
import { CreateSavingsAccountComponent } from './create-savings-account/create-savings-account.component';
const routes: Routes = [
  {path:'aboutbank',component: AboutbankComponent},
  {path:'login',component: LoginComponent },
  {path:'register',component: RegisterComponent },
  {path:'create new account',component: CreateSavingsAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
