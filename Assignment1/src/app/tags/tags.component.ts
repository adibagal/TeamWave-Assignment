
import {Component, OnInit} from '@angular/core';
import { ITag } from '../interface/interface';
import { DataService } from '../services/data.service';
import{TagsListComponent} from './tags-list/tags-list.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})


export class TagsComponent implements OnInit {
    title: string;
    popularTags: ITag[];
    myQuestions = [];
    
    constructor(public dataService: DataService) {}
    ngOnInit(){
      this.title = 'popular Angular Tags';
    
 
      this.dataService.getTags()
        .subscribe((tags: ITag[]) => this.popularTags = tags);
     }
  }