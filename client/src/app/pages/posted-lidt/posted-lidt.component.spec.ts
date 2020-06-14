import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedLidtComponent } from './posted-lidt.component';
import { ArticleService } from 'src/app/service/article.service';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('PostedLidtComponent', () => {
  let component: PostedLidtComponent;
  let fixture: ComponentFixture<PostedLidtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedLidtComponent ],
      providers:[ArticleService,AuthService,AngularFirestore,]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedLidtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
