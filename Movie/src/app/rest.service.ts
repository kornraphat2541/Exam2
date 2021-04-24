import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url = 'https://api.themoviedb.org/3/search/movie?api_key=04cc67fe04af9dc72516deb8b9240c5b&query=';
  data :string = '';
query :any




  changedata(data : any) {  
  this.data = JSON.stringify(data.mname);  
  // this.data = "Avengers"  

  }

  GetData() {
  //   console.log('url' + this.url + this.data);
    return this.http.get(this.url + this.data)

  }
}