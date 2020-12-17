import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { TagsComponent } from './tags/tags.component';


const routes: Routes = [
  {
  path:'tags', component:TagsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
