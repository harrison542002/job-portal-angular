import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { FormnavComponent } from './formnav/formnav.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { RegistraitonSuccessComponent } from './registraiton-success/registraiton-success.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { SearchListComponent } from './search-list/search-list.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    FooterComponent,
    FormnavComponent,
    ConfirmComponent,
    LoginComponent,
    ForgetpwdComponent,
    ResetpwdComponent,
    ResetSuccessComponent,
    UpdateProfileComponent,
    RegistraitonSuccessComponent,
    ProfileComponent,
    ProfileNavComponent,
    SearchListComponent,
    OtherProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
