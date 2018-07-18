import { Articles } from '../models/article';

export interface AppState {
	articleState: ArticleState;
}

export interface ArticleState {
	articles: Articles[];
}