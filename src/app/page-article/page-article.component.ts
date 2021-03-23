import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.services';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleApi: ArticleService) { }

  ngOnInit(): void {
    this.articleApi.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
      console.log(articles);
    },
      (err: any) => {
        console.error(err);
      }
    );
  }

}
