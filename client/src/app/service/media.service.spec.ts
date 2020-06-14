import { TestBed } from '@angular/core/testing';

import { MediaService } from './media.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';

describe('MediaService', () => {
  let service: MediaService;
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };
  // const FirestorageStub = {
  //   collection: (name: string) => ({
  //     doc: (_id: string) => ({
  //       upload: (id,file) => new BehaviorSubject({ foo: 'bar' }),
  //       delete: (_d: any) => new Promise((resolve, _reject) => resolve()),
  //       ref: (_d: any) => new Promise((resolve, _reject) => resolve()),
  //     }),
  //   }),
  // };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {AngularFireStorage,useValue: {}},
      ]
    });
    service = TestBed.inject(MediaService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
