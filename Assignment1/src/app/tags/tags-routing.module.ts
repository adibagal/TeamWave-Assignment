
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HttpClientModule,HttpClient } from '@angular/common/http';

import {TagsComponent} from './tags.component';


const routes: Routes = [
  { path: 'tags', component: TagsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ HttpClientModule]
})

export class TagsRoutingModule { }