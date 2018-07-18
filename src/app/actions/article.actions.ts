import { Action } from '@ngrx/store';
import { ArticleService } from '../article.service';

export const ARTICLE = "Article";
export const ADD_ARTICLE = "Add_Article";

export class ArticlesAction implements Action {
  constructor(private articleService: ArticleService){
    this.articleService.getArticle();
  }
  
    readonly type = ARTICLE;
}

export class AddArticlesAction {
  readonly type = ADD_ARTICLE;
}


export type ALL = ArticlesAction | AddArticlesAction ; 
