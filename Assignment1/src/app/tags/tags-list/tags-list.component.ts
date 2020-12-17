
import { Component, OnInit, Input } from '@angular/core';


import { ITag } from '../../interface/interface';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})


export class TagsListComponent implements OnInit {

  private _tags: ITag[] = []

  @Input() get tags(): ITag[]{
  return this._tags;
  }

  set tags(value: ITag[]){
  	if (value){
  		this._tags = value;
  	}
  }
  constructor() { }

  ngOnInit() {
  	console.log(this._tags);
  }
}