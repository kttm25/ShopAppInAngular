import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  user: User = {
    email: "",
    password: ""
  }

  signInForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder){
    this.email = fb.control("", [Validators.email, Validators.required]);
    this.password = fb.control("", [Validators.required, Validators.minLength(6)]);
    this.signInForm = fb.group({
      email: this.email,
      password: this.password
    })
  }

  handleSubmit(){
    console.log(this.signInForm.valid)
  }

}
