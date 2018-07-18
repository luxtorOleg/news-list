import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent }  from './app.component';
import { ArticleComponent }  from './components/article.component';
import { reducers, metaReducers } from './reducers/reducers';
import { ArticleService } from './article.service';
import { HttpRequestor } from './common/http-requestor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [     
        BrowserModule,
            StoreModule.forRoot(reducers, {metaReducers}),
            HttpClientModule
  ],
  declarations: [
        AppComponent,
		ArticleComponent
  ],
  providers: [
      ArticleService,
      HttpRequestor
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
