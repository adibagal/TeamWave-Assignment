import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { TagsModule} from './tags/tags.module';
import { QuestionsModule } from './questions/questions.module';
import { QuestionsRoutingModule } from './questions/questions-routing.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    TagsModule,
    QuestionsModule,
    QuestionsRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }