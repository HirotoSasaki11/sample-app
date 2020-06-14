import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Articles, Article } from 'src/app/models/models';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service: ArticleService) { }

  articles: Article[]

  ngOnInit(): void {
    this.articles = newArray(0)

    this.service.list().subscribe(
      result => {
        this.articles = result
      }
    )
  }

}
