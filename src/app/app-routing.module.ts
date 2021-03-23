import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneArticleComponent } from './one-article/one-article.component';
import { PageArticleComponent } from './page-article/page-article.component';

const routes: Routes = [
  {path: "articles", component: PageArticleComponent},
  {path: "article/:id", component: OneArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
