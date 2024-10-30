import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  user: User = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  ngOnInit(): void {

  }

  handleSubmit(){
    console.log(this.user)
  }
}
