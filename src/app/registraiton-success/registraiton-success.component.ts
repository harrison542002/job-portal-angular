import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-registraiton-success',
  templateUrl: './registraiton-success.component.html',
  styleUrls: ['./registraiton-success.component.scss']
})
export class RegistraitonSuccessComponent implements OnInit {

  email : string;
  id : any;
  link : any;

  constructor(
    private dataService : UserInfoService,
    private activeRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.id = this.activeRoute.snapshot.paramMap.get('id');

    if(this.id){

      this.dataService.getSingleData('userData', this.id)
      .pipe(
        catchError(error => this.router.navigate(['/']))
      )
      .subscribe(
        (res : any) =>{
          this.email = res['email']
        }
      )

      this.link = '/updateProfile/' + this.id;
    }
  }

}
