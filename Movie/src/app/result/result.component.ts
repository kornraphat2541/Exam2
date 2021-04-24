import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private http: RestService) { }
  
  data: any = []
  results :any=[]
  Market :any =[]
  websiteList: any = [
    { name: 'Select to Market' ,color: 'accent'},
  ]
  ngOnInit(): void {

    this.http.GetData().subscribe(
      query => {
        this.data = query
        this.submit();
      });  
    }

    submit(){
      this.results = this.data.results
        console.log(this.results);
    }
    onCheckboxChange(e : any) {
      this.results = this.data.results
    }
    addToMarket(){
      
    }
  }
