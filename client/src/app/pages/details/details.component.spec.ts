import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ArticleService } from 'src/app/service/article.service';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  // const FirestoreStub = {
  //   collection: (name: string) => ({
  //     doc: (_id: string) => ({
  //       valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
  //       set: (_d: any) => new Promise((resolve, _reject) => resolve()),
  //     }),
  //   }),
  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [RouterTestingModule],
      providers:[
        { provide: ArticleService, useValue: {} },
        { provide: AngularFirestore, useValue: {}},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
