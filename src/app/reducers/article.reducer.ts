import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/article.actions';
import { ArticleState } from './app.states';
import { ARTICLES } from '../article.service';
import { ALL } from '../actions/article.actions';


export const initialState: ArticleState = { articles: []};


export function reducer(state = initialState, action: fromActions.ALL): ArticleState {
  switch(action.type) {
    case fromActions.ARTICLE: {
      console.log(ARTICLES);
      return {articles: ARTICLES};
    }
    case fromActions.ADD_ARTICLE: {
      return {articles: ARTICLES};
    }
    default: {
      return state;
    }
  }	
}

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
    getArticleState, 
    (state: ArticleState) => state.articles 
);