import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // 이 컴포넌트의 '호스트'에 적용할 CSS class
  // app-article마다 행이 있어야 한다. Semantic UI에는 행을 나타내기 위한 row라는 CSS클래스 존재.
  // 앵귤러에서 컴포넌트 호스트Host는 컴포넌트가 연결되는 요소를 의미!
  // 호스트요소의 프로퍼티는 @HostBinding 데코레이터를 사용해서 설정할수 있음.
  // 여기서는 호스트요소의 클래스의 값이 cssClass프로퍼티와 동기화되도록 했다.
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;
  // votes: number;
  // title: string;
  // link: string;

  constructor() {
    this.article = new Article(
      'Angular 5',
      'http://angular.io',
      10
    );
    // this.title = 'Angular 5';
    // this.link = 'http://angular.io';
    // this.votes = 10;
  }

  voteUp() {
    this.article.votes += 1;
    return false;
  }

  voteDown() {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
