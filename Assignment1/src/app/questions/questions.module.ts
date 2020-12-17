import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ],
  declarations: [QuestionsComponent], 
  exports: [QuestionsComponent]
})
export class QuestionsModule {
  
}
