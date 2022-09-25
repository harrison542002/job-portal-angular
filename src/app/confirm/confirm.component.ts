import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { codeValidation } from '../code-validation.directive';
import { UserInfoService } from '../user-info.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  id: string | number;
  form: FormGroup;
  verifiedCode : string | number;

  constructor(
    private builder: FormBuilder,
    private dataService: UserInfoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

      this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')?.split('?')[1]);

      //Fetch Single Item to check for Code
       this.dataService.getSingleData('userData', this.id).subscribe((res: any) => {

        //Construct form group
        this.form = this.builder.group({
        code: this.builder.control('', [
          Validators.required,
          codeValidation(res['code'])
        ])
      })

      this.verifiedCode = res['code']
      
      })

  }

  get code(): any { return this.form.get('code') };

  onSubmit() {

    let processName = this.activatedRoute.snapshot.paramMap.get('id')?.split('?')[0];

    switch (processName) {

      //If the confirmation process is for forget password
      case 'forgetProcess':
        //router will lead to reset password page
        this.router.navigate(['resetpwd', this.id])
        break;

      //If the confirmation process is for registration
      case 'registrationProcess':
        this.router.navigate(['registrationSuccess',this.id])
        break;
    }


  }

}
