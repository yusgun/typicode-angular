import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageArticleComponent } from './page-article/page-article.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OneArticleComponent } from './one-article/one-article.component';

@NgModule({
  declarations: [
    AppComponent,
    PageArticleComponent,
    ArticleComponent,
    NavbarComponent,
    OneArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
