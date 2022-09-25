import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.scss']
})
export class OtherProfileComponent implements OnInit {

  imgURL: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  school: string;
  qulification: string;
  nickName: string;
  occupation: string;
  selfSummary : string;
  industry: string;
  skills : string[];
  id : string;

  constructor(
    private dataService: UserInfoService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.id = this.dataService.id;
    this.dataService.getSingleData('profileInfo', this.id).pipe(
      catchError(
        error => this.router.navigate(['/'])
      )
    ).subscribe(
      (res: any) => {
        this.firstName = res['firstName'];
        this.lastName = res['lastName'];
        this.imgURL = res['profileImg'];
        this.country = res['country'];
        this.city = res['city'];
        this.school = res['school'];
        this.qulification = res['qulification'];
        this.nickName = res['nickName'];
        this.occupation = res['occupation'];
        this.industry = res['industry'];
        this.email = res['email'];
        this.selfSummary = res['selfSummary'];
        this.skills = res['skill'];

        if (this.imgURL.length == 0) {
          this.imgURL = '../../assets/img/default_profile.png'
        }
      }
    )
  }

}
