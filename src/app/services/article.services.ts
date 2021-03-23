import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  route: String = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { }

  /**
   * Récupère la liste des des utilisateurs
   */
  getArticles(){
    return this.http.get<Article[]>(this.route + "posts");
  }

  getOneArticle(id:number){
    return this.http.get<Article[]>(this.route + "posts/" + id);
  }
}

