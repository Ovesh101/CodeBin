import { Component } from '@angular/core';
import {FormControl , FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService : AuthService){}
  email = new FormControl("" , {
    validators: [Validators.required, Validators.email],
  })
  password = new FormControl("" , {
    validators: [Validators.required, Validators.minLength(5)],
  })

  loginForm = new FormGroup( {
    email:this.email,
    password : this.password
  })

  login(){
    this.authService.loginUser(this.loginForm.value.email!  , this.loginForm.value.password!)
    
  }
  reset(){
    this.loginForm.reset();
  }

}
