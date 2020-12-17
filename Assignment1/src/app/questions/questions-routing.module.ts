import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { HttpClientModule,HttpClient } from '@angular/common/http';

import {QuestionsComponent } from './questions.component';
import { TagsComponent } from '../tags/tags.component';


const routes: Routes = [
  {  
    path:'questions/:tags', component: QuestionsComponent,
 
}
];


@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule],
  providers: [ HttpClientModule]
})

export class QuestionsRoutingModule {

}