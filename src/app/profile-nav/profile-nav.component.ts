import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {

  currentUser: string;
  query: string;
  constructor(
    private dataService: UserInfoService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.currentUser = this.dataService.currentId;

  }

  onSearch() {

    if(this.query.length > 0 ){
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['searchedList'], {
        queryParams : {
          searchString : this.query
        },
        queryParamsHandling : 'merge'
      })
    }
  }

}
