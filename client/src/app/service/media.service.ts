import { Injectable } from '@angular/core';
import { Media } from '../models/media';
import { Observable, of, pipe,throwError } from 'rxjs';
import { AngularFireStorage} from '@angular/fire/storage';
import { UUID } from 'angular2-uuid';
import { AngularFirestore } from '@angular/fire/firestore';
import { map ,catchError} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  
  constructor(private storage: AngularFireStorage,private db: AngularFirestore) {}
  create(file,id:string){
    return this.storage.upload(id,file)
    // .then(result=>{
    //   result.downloadURL
    //   }),
    //   catchError((error: HttpErrorResponse) => {
    //     return throwError(error);
    // });
  }
  put(id: string): Observable<Media>{
    return null
  }
  get(id: string): Observable<Media>{
    return null
  }

  delete(id: string){
    this.storage.ref(id).delete()//.subscribe(
      // () =>{ 
      //   this.db.collection('media').doc(id).delete()
      // }
    //)
  }
}
