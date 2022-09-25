import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  approve: boolean = true;
  emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  form: FormGroup;
  constructor(
    private builder: FormBuilder,
    private userService: UserInfoService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.form = this.builder.group({
      email: this.builder.control('', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),
      password: this.builder.control('', [
        Validators.required
      ])
    })

  }

  get email(): any { return this.form.get('email') }
  get password(): any { return this.form.get('password') }

  onSubmit() {

    this.userService.getAllData('userData').subscribe((res: any) => {

      let person: any = res.find(
        (element: any) => (element.email == this.email.value && element.password == this.password.value)
      )

      if (!person) {
        this.approve = false;
      } else { this.approve = true };

      if (person && this.approve == true) {
        
        this.userService.getAllData('profileInfo')
        .pipe(
          catchError(error => this.router.navigate(['/']))
        ).subscribe((res:any) => {

          let find : boolean = false;
          res.forEach((element : any) => {

            //If the user has already updated his profile
            if( element['email'] == this.email.value){
              this.router.navigate(['profile', element['id']])
              find = true;
            }
          })

          //If the user hasn't updated his profile
          if(!find){
            this.router.navigate(['updateProfile', person['id']])
          }

        })

      }

    })

  }


}
