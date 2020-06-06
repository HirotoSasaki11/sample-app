import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

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

    // Firebase SignInWithPopup
    // OAuthProvider() {
    //     let provider = new firebase.auth.GoogleAuthProvider();
    //     this.afAuth.signInWithRedirect(provider).
    //     then(result => {
    //         this.router.navigate(['list'])
    //     }).catch((error)=> {
    //         window.alert(error)
    //     })
        
    //     // return this.afAuth.signInWithPopup(provider)
    //     //     .then((res) => {
    //     //         this.ngZone.run(() => {
    //     //             this.router.navigate(['dashboard']);
    //     //         })
    //     //     }).catch((error) => {
    //     //         window.alert(error)
    //     //     })
    // }

    SigninWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    oAuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
          .then(credential => {
            console.log(credential.user);
            this.router.navigate(['list'])
          })
          .catch(err => console.log(err));
      }

    // // Firebase Google Sign-in
    // SigninWithGoogle() {
    //     //let provider = new firebase.auth.GoogleAuthProvider();
    //     this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
    //         result =>{
    //             this.router.navigate(['list'])
    //         }
    //     )
    // }

    // Firebase Logout 
    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['login']);
        })
    }

}