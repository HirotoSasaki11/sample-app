import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { Router } from "@angular/router";
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/service/article.service';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form : FormGroup
  article: Article
  constructor(private service :ArticleService,route: ActivatedRoute,public router: Router,private mediaService :MediaService) 
  {
    const id = route.snapshot.params.id
    console.log(id)
    this.service.get(id).subscribe(
      result => {
        this.article = result
        this.form = new FormGroup({
        title: new FormControl(this.article.title),
        content: new FormControl(this.article.content),
        //: new FormControl(''),
      })
      })

  }

  ngOnInit(): void {
  }
 
  onUpdate(): void {
    const now = new Date();
    this.article.title =this.form.controls['title'].value
    this.article.content =this.form.controls['content'].value
    this.article.uploadDate = now.toDateString()

    this.service.update(this.article.id,this.article).then(
      ()=>{
          this.router.navigate(['list']);
      })
  }
  delete():void {
    if(this.article.media &&this.article.media.id){
      this.mediaService.delete(this.article.media.id)
    }
    this.service.delete(this.article.id).then(()=>{
      this.router.navigate(['list']);
    })
  }
}
