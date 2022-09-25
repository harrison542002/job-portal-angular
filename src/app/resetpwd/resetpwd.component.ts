import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss']
})
export class ResetpwdComponent implements OnInit {

  form : FormGroup;

  constructor(
    private builder : FormBuilder,
    private activeRoute : ActivatedRoute,
    private userService : UserInfoService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      password : this.builder.control('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPwd : this.builder.control('')
    })
  }

  get password() : any { return this.form.get('password')}
  get confirmPwd() : any {return this.form.get('confirmPwd')}

  onSubmit(){

    let property = 'userData';
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.userService.getSingleData(property, id).subscribe((res : any) => {

      const result = res;
      result['password'] = this.password.value;

      this.userService.updateData(result,property,id).subscribe((res) => {

        this.route.navigate(['/resetsuccess'])
        
      })
      

    })
    

  }

}
