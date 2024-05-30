import { Component } from '@angular/core';
import { DBService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css'
})
export class ViewSnippetComponent {
  codeSnippet:{title:string , code:string , by:string , id:string} = {
    title:"",
    by:"",
    id:"",
    code:""
   
    
  };
  constructor(private dbService:DBService , private route:ActivatedRoute){}
  ngOnInit(): void {
    const docID = this.route.snapshot.paramMap.get('id');
    this.dbService.getSnippetById(docID!).then((data:any)=>{
      this.codeSnippet = data;
    });
  
    
  }




}
