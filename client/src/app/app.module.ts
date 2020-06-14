import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { RegisterComponent } from './pages/register/register.component';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
//import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { PostedLidtComponent } from './pages/posted-lidt/posted-lidt.component';
import { ArticleService } from './service/article.service';
import { MediaService } from './service/media.service';

const routers :Routes =[
  //{path:'',component:ListComponent},
  {path:'list',component:ListComponent},
  {path:'detail',component:DetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'edit',component:EditComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ListComponent,
    DetailsComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    EditComponent,
    PostedLidtComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      routers,
      {enableTracing:true}//デバッグ用
    ),
    MatMenuModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [AuthService,ArticleService,MediaService,AngularFireStorage,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
