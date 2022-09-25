import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';
import { RegistraitonSuccessComponent } from './registraiton-success/registraiton-success.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchListComponent } from './search-list/search-list.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';

const routes: Routes = [
  {path : 'home' , title : "ABC Jobs Portal",component : HomeComponent},
  {path : 'register' , title : "Registration" , component : RegistrationComponent},
  {path : 'confirmation/:id', title : "Confirmation" , component : ConfirmComponent},
  {path : 'login', title : "Log In", component : LoginComponent},
  {path : 'forgetpwd', title : "Forget Password", component : ForgetpwdComponent},
  {path : 'resetpwd/:id' , title : "Reset Password", component : ResetpwdComponent},
  {path : 'resetsuccess', title : "Reset Success Message", component : ResetSuccessComponent},
  {path : 'registrationSuccess/:id', title : "Registration Successful", component: RegistraitonSuccessComponent},
  {path : 'updateProfile/:id', title : "Update Profile", component : UpdateProfileComponent},
  {path : 'profile/:id', title : "User Profile", component : ProfileComponent},
  {path : 'searchedList', title : "Searched Result", component : SearchListComponent},
  {path : 'otherProfile' , title : "Other Profile" , component : OtherProfileComponent},
  {path : '' , pathMatch : "full" , redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
