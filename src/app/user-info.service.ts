import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService{

  SERVER_URL = 'http://localhost:3000/';
  id : any = "";
  currentId: any = "";

  constructor(
    private http : HttpClient
  ) { }

  getAllData(property : string){

    let url = this.SERVER_URL + property;
    return this.http.get(url)
 
  }

  getSingleData(property : string, id : string | number){
    let url = this.SERVER_URL + property + '/' + id;
    return this.http.get(url)
  }

  postData(data : any, property:string){

    let url = this.SERVER_URL + property;
    return this.http.post(url, data);

  }

  updateData(data : any, property : string, id : string | number){

    let url = this.SERVER_URL + property + '/' + id;
    return this.http.put(url,data)

  }

  searchData(query : string, property : string){

    query = query.trim();
    let url = this.SERVER_URL + property + '?q=' + query;
    return this.http.get(url);
    
  }

}
