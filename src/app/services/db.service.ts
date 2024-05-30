import { Injectable } from '@angular/core';
import { getDocs, getFirestore } from 'firebase/firestore';
import { collection, addDoc , doc , getDoc } from 'firebase/firestore';
import { AuthService } from './auth.service';
import { snippet } from '../../models/snippetType';

@Injectable({
  providedIn: 'root',
})
export class DBService {
  private db: any;
  constructor(private authService : AuthService) {
    this.db = getFirestore();
  }

  //  Adding Snippet

   async createSnippet(snippet:snippet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {...snippet , by:this.authService.getUiId()});
      console.log('Document written with ID: ', docRef.id);
      console.log("Snippet Added" , snippet);
      
    } catch (e) {
      console.error('Error adding document: ', e);
      alert("Error Ocuur While Creating Snippet")
    }
  }

  // Get All Snippet
  async getAllSnippet(){
    let result:any = [];
    try {
      const querySnapShot  = await getDocs(collection(this.db , 'snippets'));
      querySnapShot.forEach((doc)=>{
        const data = doc.data();
        console.log(`${doc.id} => ${data["title"]}`);
        result.push({...doc.data() , id:doc.id});
        
        
      })
      return result;
    } catch (error) {
      console.error('Error Getting document: ', error);
      alert("Error Ocuur While Getting Snippet")
  
    }
  }

  //  Get Single Snippet
  
async getSnippetById(docId:string){
const docRef = doc(this.db, "snippets", docId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  return {
    id:"-1",
    title:"Not Found",
    code:"no snippet exist"
  }
}
}
}
