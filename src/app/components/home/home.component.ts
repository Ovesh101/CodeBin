import { Component, NgModule } from '@angular/core';
import { DBService } from '../../services/db.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink  , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dbService:DBService){}
  items:{id:string , by:string , code:string , title:string}[] = []

   ngOnInit() {
    this.dbService.getAllSnippet().then((data:any)=>{
      this.items = data;
      console.log(data);
      
    })
   
    
  }

}
