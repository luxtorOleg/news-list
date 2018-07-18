import { Action } from '@ngrx/store';
import { ArticleService } from '../article.service';

export const ARTICLE = "Article";
export const ADD_ARTICLE = "Add_Article";
export const ADD_LIST = "Add_List";

export class ArticlesAction implements Action {  
    readonly type = ARTICLE;
}

export class AddArticlesAction implements Action {
  readonly type = ADD_ARTICLE;
}

export class AddListAction implements Action {
  readonly type = ADD_LIST;
}


export type ALL = ArticlesAction | AddArticlesAction | AddListAction ; 
