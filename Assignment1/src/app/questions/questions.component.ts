import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { IQuestion } from '../interface/interface';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

  
  myQuestions: IQuestion[] = [];
  tag: string;
  
  
  constructor(
    private dataService: DataService,
    private route:ActivatedRoute
  ){};

  ngOnInit() {
  
   
  	this.tag = this.route.snapshot.paramMap.get('tag');
    
   
    this.dataService.getQuestions('angularjs-directive')
      .subscribe((questions:IQuestion[]) => {
        this.myQuestions = questions;
    })
  }
}
