import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.services';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent implements OnInit {

  id: number;

  article: Article;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private articleApi: ArticleService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameter => {
      this.id = parameter.id;
    });
    /*if(this.id != this.article.id){
      this.route.navigate(["**"]);
    }*/
    this.articleApi.getOneArticle(this.id).subscribe((art:any) => {
      this.article = art;
    },
      (err: any) => {
        console.error(err);
      }
    );
  }

}
