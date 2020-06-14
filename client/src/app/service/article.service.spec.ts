import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

describe('ArticleService', () => {
  let service: ArticleService;
  const FirestoreStub = {
    collection: (name: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
        delete: () => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        //{ provide: ArticleService, useClass: ArticleService },
        {AngularFirestore,useValue: FirestoreStub},
      ]
    });
    service = TestBed.inject(ArticleService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
