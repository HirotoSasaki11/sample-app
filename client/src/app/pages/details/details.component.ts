import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/models/article';
import {ActivatedRoute} from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  article: Article

  constructor(private service :ArticleService,route: ActivatedRoute,public router: Router) {
    const id = route.snapshot.queryParams.id
    this.service.get(id).subscribe(
      result => {
        this.article = result
      })
   }

  ngOnInit(): void {
  }
  edit():void{
    const param = {
      id: this.article.id,
    };
    this.router.navigate(['edit',param]);
  }

}
