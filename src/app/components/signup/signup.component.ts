import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private authService:AuthService){}
  email = new FormControl("" , {
    validators: [Validators.required, Validators.email],
  })
  password = new FormControl("" , {
    validators: [Validators.required, Validators.minLength(5)],
  })

  registerForm = new FormGroup( {
    email:this.email,
    password : this.password
  })

  register(){
    this.authService.registerUser(this.registerForm.value.email! , this.registerForm.value.password!)
    
    
  }
  reset(){
    this.registerForm.reset();
  }

}
