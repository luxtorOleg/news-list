import { Injectable } from '@angular/core';
import { HttpRequestor } from './common/http-requestor';
import { Constants } from './common/constants';
import { Articles } from './models/article';

export let ARTICLES: Articles[] = [];
@Injectable()
export class ArticleService {
  
  constructor (public httpRequestor: HttpRequestor) { }

  public getArticle(): Promise<any> {
    return this.httpRequestor.getRequest(Constants.ArticlesGet).then( data => {
      console.log(data);
      ARTICLES = data.articles;
      return data.article;
    });
  }
}
