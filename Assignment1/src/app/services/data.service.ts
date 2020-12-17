import { Injectable } from '@angular/core';

import { HttpClientModule,HttpClient } from '@angular/common/http';


// Importinng RXJS Obserable, map and catchError
import { Observable,of} from 'rxjs';
import {  map, catchError} from 'rxjs/operators';
import {  throwError } from 'rxjs';

// Importing Tag and Question Data Model from Interfaces
import { ITag, IQuestion } from '../../app/interface/interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }	

  baseUrl: string = 'assets/';

  stackUrl = 'https://api.stackexchange.com/docs/advanced-search#order=desc&sort=activity&filter=default&site=stackoverflow'; 
  site = '/faq?site=stackoverflow';
  

  
  
  getTags(): Observable<ITag[]>{
    let myTags = this.http.get<ITag[]>(this.baseUrl )
      .pipe(
        catchError(this.handleError)
    );
    return myTags
  }


  getQuestions(tag: string): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(this.stackUrl + tag + this.site)
      .pipe(
        map( data => {
          var items = data['items'];
          var questions: IQuestion[] = [];
          
         
          for (let item of items){
            var question: IQuestion = {
              id: item['question_id'],
              tag: tag,
              voteCount: item['score'],
              questionTitle: item['title'],
              questionLink: item['link']
            };
            questions.push(question);
          }
          return questions;
        }),
        
        
        catchError(this.handleError)
      );
  }

  
    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
        
      }
      return Observable.throw(error || 'Node.js server error');
    }
}
