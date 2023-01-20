import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:any= FormGroup;

  constructor(private fb: FormBuilder) {}

 
  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
   
    console.log('Email', form.value.email);
    console.log('Password',form.value.password);
   
  }

}
