import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/article.actions';
import { State } from './app.states';
import { ARTICLES } from '../article.service';
import { ALL } from '../actions/article.actions';
import { Lists } from '../components/article.component';


export const initialState: State = { articles: ARTICLES, lists: Lists};


export function reducer(state = initialState, action: fromActions.ALL) {
  switch(action.type) {
    case fromActions.ARTICLE: {
      return {...state, articles: ARTICLES};
    }
    case fromActions.ADD_ARTICLE: {
      return {...state, articles : ARTICLES};
    }
    case fromActions.ADD_LIST: {
      return {...state, lists: Lists};
    }
    default: {
      return state;
    }
  }	
}

export const getArticleState = createFeatureSelector<State>('articleState');
export const getListState = createFeatureSelector<State>('listState');

export const getArticles = createSelector(
    getArticleState, 
    (state: State) => state.articles 
);

export const getLists = createSelector(
  getListState, 
  (state: State) => state.lists 
);