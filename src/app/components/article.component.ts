import { Store } from '@ngrx/store';
import { Component } from '@angular/core';    
import { Observable } from 'rxjs/Observable';
import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from '../reducers/app.states';
import { Articles } from '../models/article';
import { ArticleService } from '../article.service';

@Component({
	selector: 'app-article',
	templateUrl: 'article.component.html'
})
export class ArticleComponent {
	articles: Observable<Articles[]>;

	constructor(private store: Store<ArticleState>, private articleService: ArticleService) {
		this.articles = store.select(articleReducer.getArticles);
	}

	showArticles(){
			this.store.dispatch(new fromActions.ArticlesAction(this.articleService));
	}

	addNewItem() {
		this.store.dispatch(new fromActions.AddArticlesAction());
	}
}	