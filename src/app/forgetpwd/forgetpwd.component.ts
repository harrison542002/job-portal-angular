import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.scss']
})
export class ForgetpwdComponent implements OnInit {

  data : any;
  error : boolean = false;
  form : FormGroup;
  emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(
    private builder : FormBuilder,
    private UserDataService : UserInfoService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.UserDataService.getAllData('userData').pipe(
      catchError( error => "Something Wrong" )
    ).subscribe(
      res => this.data = res
    )

    this.form = this.builder.group({
      email : this.builder.control('',[
        Validators.pattern(this.emailRegex),
        Validators.required
      ])
    })

  }


  get email() : any {return this.form.get('email')};

  onSubmit(){

    let value : any = this.data.find(
      (element : any) => element.email == this.email.value
    )

    if(!value){
      this.error = true;
    } else{ this.error = false};

    if(!this.error){

      let id = value['id'];
      this.router.navigate(['confirmation' , 'forgetProcess?' + id])
      console.log(value['code']);

    }
  }

}
