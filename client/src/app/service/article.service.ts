import { Injectable } from '@angular/core';
import { Article, Articles } from '../models/models';
import { Observable, of, pipe } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private db: AngularFirestore) { }
  get(id: string): Observable<Article> {
    return this.db.collection<Article>('article').doc(id).valueChanges()
  }
  list(): Observable<Article[]> {
    return this.db.collection<Article>('article').valueChanges()
  }
  create(article: Article){
    //this.db.collection('article').add(article)
    return this.db.collection('article').doc(article.id).set(article)
  }
  update(id: string,article: Article){
    //return this.db.collection('article').doc(id).update(article)
    return this.db.collection('article').doc(id).set(article)
  }

  delete(id: string){
    return this.db.collection('article').doc(id).delete()
  }
}
