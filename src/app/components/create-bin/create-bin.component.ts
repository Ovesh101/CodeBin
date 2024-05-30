import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DBService } from '../../services/db.service';
import { snippet } from '../../../models/snippetType';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css'
})
export class CreateBinComponent {
  constructor(private dbService:DBService){}
  title = new FormControl("" , {
    validators: [Validators.required]
  })
  code = new FormControl("" , {
    validators: [Validators.required]
  })

  binForm = new FormGroup( {
    title:this.title,
    code : this.code
  })

  async save(){
    await this.dbService.createSnippet(this.binForm.value as snippet)
    
    
  }

}
