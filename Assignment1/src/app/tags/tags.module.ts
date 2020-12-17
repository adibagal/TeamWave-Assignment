
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';

import { ServicesModule } from '../services/services.module';
import {TagsComponent} from './tags.component';
import {TagsListComponent}from './tags-list/tags-list.component';

@NgModule({


  imports: [
    CommonModule,
    TagsRoutingModule, 
    ServicesModule
  ],
  
  providers:[],
  declarations: [TagsComponent,TagsListComponent],
  exports: [TagsComponent]
})

export class TagsModule { }
