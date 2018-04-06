import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import {MyNewInterface} from "./my-new-interface";
import {MySecondInterface} from "./my-second-interface";

@Injectable()
export class ApiService {

  private postsURL ="https://roundlaw.com/api/v1/places/cities";
  private unitsURL ="https://roundlaw.com/api/v1/competencies";

  constructor(private http: Http ) {}
 getPosts(): Observable<MyNewInterface[]>{
    return this.http
     .get(this.postsURL)
     .map((response: Response)=> {
       return <MyNewInterface[]>response.json();
     })
     .catch(this.handleError);
 }
 
 
  
 getUnits(): Observable<MySecondInterface[]>{
    return this.http
     .get(this.unitsURL)
     .map((response: Response)=> {
       return <MySecondInterface[]>response.json();
     })
     .catch(this.handleError);
 }

 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }

}

