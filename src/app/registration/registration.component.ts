import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';
import { emailDuplicateValidation } from '../email-duplication.directive';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form : FormGroup;
  emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(
    private builder : FormBuilder,
    private router : Router,
    private dataService : UserInfoService
  ) { }

  ngOnInit(): void {

    this.dataService.getAllData('userData')
    .pipe(
      catchError(error => "Make sure to connect json-server")
    )
    .subscribe( (res:any) => {

      this.form = this.builder.group({
        email : this.builder.control('', [
          Validators.required,
          Validators.pattern(this.emailRegex),
          emailDuplicateValidation(res)
        ]), 
  
        password : this.builder.control('',[
          Validators.required,
          Validators.minLength(8)
        ]),
      })
    })

  }

  get email() : any {
    return this.form.get('email');
  }

  get password() : any{
    return this.form.get('password');
  }

  onSubmit(){
    if(this.form.valid)
    { 
      let code = String(Math.floor(Math.random() * ((600000 - 100000) + 100000)))

       const newUserInfo = {
        email : this.email.value,
        password : this.password.value,
        code : code
      }

      this.dataService.postData(newUserInfo, 'userData').subscribe(
        (res : any) => {

          console.log(res['code']);
          this.router.navigate(['confirmation', 'registrationProcess?' + res['id']]) 
            
        }
      )
    }
    
  }


}
