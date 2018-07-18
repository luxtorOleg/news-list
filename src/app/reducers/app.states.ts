import { Articles, List } from '../models/article';

export interface AppState {
	articleState: State;
	listState: State;
}

export interface State {
	articles: Articles[];
	lists: List[]
}