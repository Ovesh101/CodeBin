import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uiId?:string

  constructor(private router:Router) {
    const auth = getAuth();
    onAuthStateChanged(auth ,(user)=>{
      if(user){
        this.uiId = user.uid;
        console.log("User Info" , user);
        
        console.log("User Logged In" , user.email);
        
      }else{
        this.uiId = undefined;
        console.log("User LogOut ");
        
      }
    })
   }

   isAuthenticated(){
    return this.uiId ? true : false;
   }

   getUiId(){
    return this.uiId;
   }

  registerUser(email : string , password : string){

    const auth = getAuth();
    createUserWithEmailAndPassword(auth , email  , password)
    .then((userCredential)=>{
      const user = userCredential.user; 
      console.log({user});
      this.router.navigate(['/login'])
      
    }).catch((error)=>{
      const errorMessage = error.messsage;
      console.log(errorMessage);
      alert("Something went wrong while signUp");
    })


  }
  loginUser(email:string , password:string){
    const auth = getAuth();
   signInWithEmailAndPassword(auth , email , password)
    .then((userCredential)=>{
      const user = userCredential.user; 
      console.log({user});
      this.router.navigate(['/'])
      
    }).catch((error)=>{
      const errorMessage = error.messsage;
      console.log(errorMessage);
      alert("Something went wrong while signUp");
    })


  }
  logout(){
    const auth = getAuth();
    signOut(auth).then(()=>{
      this.router.navigate(['/login'])
    }).catch((error)=>{
      alert("Something went wrong while logout....")
    })
  }
}
