import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from 'src/app/service/article.service';
import { Articles, Article } from 'src/app/models/models';
import { UUID } from 'angular2-uuid';
import { Router } from "@angular/router";
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form : FormGroup
  article :Article
  imageSrc = '';
  reader = new FileReader();
  fileUrl = '';
  file :File

  constructor(public router: Router,private service :ArticleService ,private mediaService :MediaService) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
      image: new FormControl(''),
    })
  }
  onSubmit(): void {
    const now = new Date();
    const mediaID = UUID.UUID()
    this.mediaService.create(this.file,mediaID+"/"+this.file.name).then(
      result => {
        this.article = <Article>{
          id :UUID.UUID(),
          createDate:now.toDateString(),
          uploadDate:now.toDateString(),
          author:'ゲスト',
          title:this.form.controls['title'].value,
          content:this.form.controls['content'].value,
          media:{
            name:this.file.name,
            id:mediaID,
            url:"https://storage.cloud.google.com/"+result.ref.bucket+"/"+result.ref.fullPath
          }
        }
      }
    ).then(
      () => {
        this.service.create(this.article).then
      }
    ).then(
      ()=>{
          this.router.navigate(['list']);
      }
    )
    
  }
  
  onChangeInput(evt) {
    //this.fileUrl = this.form.controls['image'].value,
    this.file = evt.target.files[0];
  }
}
