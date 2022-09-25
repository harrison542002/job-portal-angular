import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  email : string[];
  searchedLists : [] = [];
  img : string[];

  constructor(
    private dataService : UserInfoService,
    private router : Router,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((params : any) => {

      let query : any = params['params']['searchString']
      this.dataService.searchData(query, 'profileInfo')
        .pipe(
          catchError(error => this.router.navigate(['/']))
        ).subscribe(
          res => {  
            this.searchedLists = res as any;
            if(this.searchedLists){
              this.img = this.searchedLists.map(element => element['profileImg']);
            }
          }
        )
    });
  }

  onClick(id : string){
    this.dataService.id = id;
    this.router.navigate(['otherProfile'])
  }

}
