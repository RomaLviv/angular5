import { Component , OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from "./my-new-interface";
import { MySecondInterface } from "./my-second-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit{
  title = 'app';

  _postsArray: MyNewInterface[];
  _unitsArray: MySecondInterface[];

  constructor(private apiSerivce: ApiService){}

  getPosts(): void {
    this.apiSerivce.getPosts().
    subscribe(
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }
  
  getUnits(): void {
    this.apiSerivce.getUnits().
    subscribe(
       resultArray => this._unitsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }
  
  ngOnInit(): void{
    this.getPosts();
    this.getUnits();
  
  }
 
}
