import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup; 
  private formSubmitAttempt?: boolean;
  

  has_error = false;

  constructor(private fb: FormBuilder, private router : Router, private authService: AuthService) { 
   
    this.userForm  = this.fb.group({
        'userName': [null, [Validators.required]],
        'password': [null, [Validators.required]],
      });

  

  }


  ngOnInit(): void {
    
    
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.userForm.valid)
    );
    
  }


  get f(){return this.userForm.controls;}
    
  onSubmit(){

    if(this.userForm.invalid){
      return;
    }else{
  
     this.authService.login(this.userForm.value);

    }

    this.formSubmitAttempt = true;
      
   
  }

}
