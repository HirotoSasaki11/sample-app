import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user: firebase.User;

    constructor(
        public router: Router,
        public ngZone: NgZone,
        public afAuth: AngularFireAuth,
    ) {
        this.afAuth.authState.subscribe(user => {
            this.user = user;
        })
    }
    SigninWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    oAuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
          .then(credential => {
            //console.log(credential.user);
            this.router.navigate(['list'])
          })
          .catch(err => console.log(err));
      }

      get currentUser(){
        return this.afAuth.auth != null ?
         this.afAuth.auth.currentUser != null?
          this.afAuth.auth.currentUser.displayName: null:null
      }
    // Firebase Logout 
    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['list']);
        })
    }

}