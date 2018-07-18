import { Store } from '@ngrx/store';
import { Component } from '@angular/core';    
import { Observable } from 'rxjs/Observable';
import * as articleReducer from '../reducers/article.reducer';
import * as fromActions from '../actions/article.actions';
import { State } from '../reducers/app.states';
import { Articles, List } from '../models/article';
import { ArticleService, ARTICLES } from '../article.service';

export let Lists: List[] = [];

@Component({
	selector: 'app-article',
	templateUrl: 'article.component.html',
	styleUrls: ['./article.component.css']
})

export class ArticleComponent {
	createListBut: string = "Create List";
	index: number = 0;
	listName: string = "";
	listDesc: string = "";
	ifCreateNewList: boolean = false;
	addNews: boolean = false;
	addNewList: boolean = false;
	name: string = "";
	title: string = "";
	url: string = "";
	artc: Articles = {
		source: {
			id: "",
			name: ""
		},
		author: "",
		title: "",
		description: "",
		url: "",
		urlToImage: "",
		publishedAt: ""
	};
	articles: Observable<Articles[]>;
	lists: Observable<List[]>;

	constructor(private store: Store<State>, private articleService: ArticleService) {
		this.articles = store.select(articleReducer.getArticles);
		this.lists = store.select(articleReducer.getLists); 
	}

	ngOnInit() {
		this.articleService.getBussinessArticle().then(()=> {
			this.store.dispatch(new fromActions.ArticlesAction());
			console.log(this.articles);
		});
	}

	addNewItem() {
		console.log(this.addNews);
		
		if(this.addNews === false){
			this.addNews = true;
			if(this.emptyValue()){
				this.store.dispatch(new fromActions.AddArticlesAction());
			}
		}else if (this.addNews === true) {
			this.addNews = false;
			console.log(this.name);
			if(this.emptyValue()){
				let copyObj = Object.assign({}, this.artc);
				copyObj.source.name = this.name;
				copyObj.title = this.title;
				copyObj.url = this.url;

				ARTICLES.push(copyObj);
			}
		}
	}

	addToList(index: number){
		this.addNewList = true;
		this.index = index;
	}

	emptyValue() {
		if(this.name === "" || this.title === "" || this.url === ""){
			return false;
		}else {
			return true;
		}
	}

	addList(event){
		if(this.ifCreateNewList === true) {
			this.createListBut = "Create List";
			this.ifCreateNewList = false;
			let ArticlCopy :Articles[] = [];

			ArticlCopy[0] = ARTICLES[this.index];
			Lists.push({name: this.listName, desc: this.listDesc, articles: ArticlCopy });
			this.store.dispatch(new fromActions.AddListAction());
			console.log(this.lists);
			this.addNewList = false;
			this.ifCreateNewList = false;
		}else {
			this.ifCreateNewList = true;
			
			this.createListBut = "Add";
		}
		
	}
}	