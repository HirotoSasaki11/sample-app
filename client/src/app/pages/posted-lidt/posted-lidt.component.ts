import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/models/models';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-posted-lidt',
  templateUrl: './posted-lidt.component.html',
  styleUrls: ['./posted-lidt.component.scss']
})
export class PostedLidtComponent implements OnInit {
  articles: Article[]

  constructor(private list :ArticleService) { }

  ngOnInit(): void {
    this.articles = newArray(0)
    this.articles.push(<Article>
      {
        id: 'id1',
        author:'筆者１',
        title:'タイトル1',  
        content:'コンテント1',
        //uploadDate:"2018-11/22",
      }, 
      {
        id: 'id2',
        author:'筆者2',
        title:'タイトル2',  
        content:'コンテント2',
        //uploadDate:"2018/11/22",
      }, 
      {
        id: 'id3',
        author:'筆者3',
        title:'タイトル3',  
        content:'コンテント3',
        //uploadDate:"2018年11月22日",
      },
      {
        id: 'id1',
        author:'筆者１',
        title:'タイトル1',  
        content:'コンテント1',
        //uploadDate:"2018-11/22",
      }, 
      {
        id: 'id2',
        author:'筆者2',
        title:'タイトル2',  
        content:'コンテント2',
        //uploadDate:"2018/11/22",
      }, 
      {
        id: 'id3',
        author:'筆者3',
        title:'タイトル3',  
        content:'コンテント3',
        //uploadDate:"2018年11月22日",
      },
      {
        id: 'id1',
        author:'筆者１',
        title:'タイトル1',  
        content:'コンテント1',
        //uploadDate:"2018-11/22",
      }, 
      {
        id: 'id2',
        author:'筆者2',
        title:'タイトル2',  
        content:'コンテント2',
        //uploadDate:"2018/11/22",
      }, 
      {
        id: 'id3',
        author:'筆者3',
        title:'タイトル3',  
        content:'コンテント3',
        //uploadDate:"2018年11月22日",
      },
      {
        id: 'id1',
        author:'筆者１',
        title:'タイトル1',  
        content:'コンテント1',
        //uploadDate:"2018-11/22",
      }, 
      {
        id: 'id2',
        author:'筆者2',
        title:'タイトル2',  
        content:'コンテント2',
        //uploadDate:"2018/11/22",
      }, 
      {
        id: 'id3',
        author:'筆者3',
        title:'タイトル3',  
        content:'コンテント3',
        //uploadDate:"2018年11月22日",
      },
      )
  }

}
